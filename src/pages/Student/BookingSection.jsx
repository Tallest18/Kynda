import { useState } from "react";
import { Link } from "react-router-dom";
import StudentNavbar from "../../components/StudentNavbar";
import Footer from "../../components/Footer";
import profileImg from "/images/tutor.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  getFirstWeekdayOfMonth,
  getDaysInMonth,
  canGoToPreviousMonth,
} from "../../utils/calenderUtils";
import { generateTimeSlots } from "../../utils/timeUtils";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function BookingSection() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const monthIndex = currentDate.getMonth(); // 0–11
  const year = currentDate.getFullYear();

  const changeMonth = (currentDate, direction) => {
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + direction,
      1
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(changeMonth(currentDate, +1));
  };

  const handlePrevMonth = () => {
    if (canGoToPreviousMonth(currentDate)) {
      setCurrentDate(changeMonth(currentDate, -1));
    }
  };

  const selectDateHandler = (dateKey) => {
    setSelectedDate(dateKey);
    console.log("Selected date:", dateKey);
  };

  return (
    <>
      <StudentNavbar />
      <section className="max-w-screen-2xl mx-auto px-2 py-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-5 gap-10">
        <div className="col-span-1 md:col-span-3 xl:col-start-1 xl:col-end-4">
          <h1 className="text-[#0B0C2E] text-2xl lg:text-4xl font-semibold mb-10">
            Booking Preferences
          </h1>

          {/* the user profile card goes here */}
          <div className="bg-[#F1F5F9] w-full border border-[#E4E4E7] flex justify-between items-center p-4 rounded-2xl mb-8">
            <div className="flex gap-2 items-center">
              <figure className="w-12 h-12 overflow-hidden rounded-full">
                <img
                  src={profileImg}
                  alt="profile"
                  className="w-full h-full rounded-full"
                />
              </figure>
              <div>
                <p className="text-sm text-[#0B0C2E] capitalize font-semibold">
                  Belrah Mercy
                </p>
                <span className="text-sm text-[#6B7280] capitalize">
                  Science tutor
                </span>
              </div>
            </div>
            <button className="bg-white text-[#1E2382] border border-[#E2E8F0] p-3 rounded-xl active:scale-95 duration-200 cursor-pointer">
              View Details
            </button>
          </div>

          {/* the calendar container goes here */}
          <div className="border border-[#E2E8F0] p-4 rounded-2xl">
            <h2 className="text-[#2D2D2D] text-2xl font-semibold mb-4">
              Select Starting Date
            </h2>
            <div className="max-w-[490px] h-[497px] border border-[#E2E8F0] rounded-xl p-4">
              <header className="flex justify-between">
                <time>
                  {MONTHS_SHORT[monthIndex]} {year}
                </time>
                <div className="flex gap-6">
                  <button
                    className="cursor-pointer disabled:opacity-50 disabled:text-gray-400 active:scale-95"
                    onClick={handlePrevMonth}
                    disabled={!canGoToPreviousMonth(currentDate)}
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    className="cursor-pointer active:scale-95"
                    onClick={handleNextMonth}
                  >
                    <ChevronRight />
                  </button>
                </div>
              </header>
              {/* the main calendar digits */}
              <article className="mt-8">
                <CalendarHeader days={days} />
                <CalendarWeekdays
                  currentDate={currentDate}
                  handleSelectDate={selectDateHandler}
                  selectedDate={selectedDate}
                />
              </article>
            </div>
          </div>

          {/* the booking time frame goes here */}
          <BookingTimeFrames
            selectedDate={selectedDate}
            onSelectTime={(t) => console.log(t)}
          />
        </div>

        <div className="col-span-1 md:col-span-3 xl:col-start-4 xl:col-end-6">
          <h1 className="text-[#0B0C2E] text-2xl lg:text-4xl font-semibold mb-10">
            See All Bookings
          </h1>
          <BookingSummary />
        </div>
      </section>
      <Footer />
    </>
  );
}

function CalendarHeader({ days }) {
  return (
    <header className="grid grid-cols-7 mb-4">
      {days.map((day) => (
        <p className="text-[#2D2D2D] text-center font-semibold" key={day}>
          {day}
        </p>
      ))}
    </header>
  );
}

function CalendarWeekdays({ currentDate, handleSelectDate, selectedDate }) {
  const firstDayOfMonth = getFirstWeekdayOfMonth(currentDate);
  const totalDaysInMonth = getDaysInMonth(currentDate);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;

  const today = new Date();
  const emptyBoxes = Array(firstDayOfMonth).fill("");

  return (
    <div className="grid grid-cols-7 gap-1">
      {emptyBoxes.map((_, i) => (
        <div
          key={`empty-${year}-${month}-${i}`}
          className="py-4 text-[#2D2D2D] text-sm text-center"
        />
      ))}

      {Array.from({ length: totalDaysInMonth }, (_, i) => {
        const day = i + 1;
        const dateKey = `${year}-${month}-${day}`;
        const isSelected = selectedDate === dateKey;

        // Disable if the date is in the past
        const dateObj = new Date(year, month - 1, day);
        const isPast =
          dateObj <
          new Date(today.getFullYear(), today.getMonth(), today.getDate());

        return (
          <button
            key={dateKey}
            className={`py-4 text-sm text-center border border-gray-300 cursor-pointer ${
              isSelected
                ? "bg-[#1E2382] text-white"
                : isPast
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-[#2D2D2D]"
            }`}
            onClick={() => !isPast && handleSelectDate(dateKey)}
            disabled={isPast}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
}

function BookingSummary() {
  return (
    <article className="p-6 border border-[#E4E4E7] rounded-2xl">
      <h2 className="font-semibold text-lg border-b-2 border-[#E4E4E7] pb-4 mb-6">
        Booking Summary
      </h2>
      <div className="flex justify-between my-4">
        <p className="text-[#858C95]">Service:</p>
        <p className="text-[#374758] font-semibold">Science Class</p>
      </div>
      <div className="flex justify-between my-4">
        <p className="text-[#858C95]">Duration:</p>
        <p className="text-[#374758] font-semibold">2hours</p>
      </div>
      <div className="flex justify-between my-4">
        <p className="text-[#858C95]">Start Date:</p>
        <p className="text-[#374758] font-semibold">June-18-2025</p>
      </div>
      <div className="flex justify-between my-4">
        <p className="text-[#858C95]">Time:</p>
        <p className="text-[#374758] font-semibold">4:PM</p>
      </div>
      <div className="flex justify-between border-t-2 border-[#E4E4E7] py-6">
        <p className="text-[#00010E] font-bold">Total</p>
        <span className="text-[#00A9C1] font-bold">&#8358;52,000</span>
      </div>
      <button className="w-full bg-[#1E2382] text-white font-semibold capitalize p-4 rounded-2xl active:scale-95 duration-200 cursor-pointer">
        Book Course
      </button>
      <p className="mt-4 px-6 text-center text-gray-400">
        By booking, you agree to our{" "}
        <Link className="text-[#00A9C1]">terms</Link> and cancellation{" "}
        <Link className="text-[#00A9C1]">policy</Link>
      </p>
    </article>
  );
}

function BookingTimeFrames({ selectedDate, onSelectTime }) {
  const [selectedTime, setSelectedTime] = useState(null);
  const timeFrames = generateTimeSlots();

  const today = new Date();
  const selected = selectedDate ? new Date(selectedDate) : new Date(); // fallback to today

  const isToday =
    today.getFullYear() === selected.getFullYear() &&
    today.getMonth() === selected.getMonth() &&
    today.getDate() === selected.getDate();

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    if (onSelectTime) onSelectTime(time);
  };

  return (
    <div className="border border-[#E2E8F0] p-4 rounded-2xl mt-8">
      <h2 className="text-[#2D2D2D] text-2xl font-semibold mb-4">
        Pick Daily Class Time
      </h2>
      <article className="grid grid-cols-3 gap-6">
        {timeFrames.map((time) => {
          const [hour, minute] = time.split(":").map(Number);

          const isPast =
            isToday &&
            (hour < today.getHours() ||
              (hour === today.getHours() && minute <= today.getMinutes()));

          const isSelected = selectedTime === time;

          return (
            <button
              key={time}
              onClick={() => !isPast && handleTimeClick(time)}
              disabled={isPast}
              className={`p-4 border rounded-xl cursor-pointer ${
                isPast
                  ? "border-gray-300 bg-gray-200 text-gray-400 cursor-not-allowed"
                  : isSelected
                  ? "border-[#1E2382] bg-[#1E2382] text-white"
                  : "border-[#E2E8F0] bg-white text-[#2D2D2D]"
              }`}
            >
              {time}
            </button>
          );
        })}
      </article>
    </div>
  );
}