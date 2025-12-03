import React from "react";
import {
  Calendar,
  Clock,
  User,
  Check,
  TriangleAlert,
  OctagonAlert,
} from "lucide-react";

const dummyBookings = [
  {
    id: "bkg_001", // unique ID from database
    tutorImage: "https://picsum.photos/200?random=1",
    tutorName: "Belrah Mercy",
    courseTitle: "Science Tutor",
    subjects: "Mathematics, Physics & Chemistry",
    startDate: "2025-06-19",
    endDate: "2025-06-19",
    time: "14:00 P.M",
    price: "₦52,000",
    status: "confirmed",
  },

  {
    id: "bkg_002",
    tutorImage: "https://picsum.photos/200?random=2",
    tutorName: "Samuel Adeyemi",
    courseTitle: "Web Development Tutor",
    subjects: "HTML, CSS & JavaScript",
    startDate: "2025-07-02",
    endDate: "2025-07-30",
    time: "10:00 A.M",
    price: "₦35,000",
    status: "pending",
  },

  {
    id: "bkg_003",
    tutorImage: "https://picsum.photos/200?random=3",
    tutorName: "Chiamaka Okorie",
    courseTitle: "English Language Tutor",
    subjects: "Grammar, Writing & Literature",
    startDate: "2025-05-12",
    endDate: "2025-06-12",
    time: "16:30 P.M",
    price: "₦28,000",
    status: "cancelled",
  },
];

export default function BookedCourses() {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 py-6">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0B0C2E] font-semibold">
        Science Section: Mathematics, Physics & Chemistry
      </h1>

      {/* the booked student coures goes here */}
      <div className="flex gap-8 flex-col my-6">
        {dummyBookings.map((booking) => (
          <StudentBookingCard
            key={booking.id}
            booking={booking}
            onViewDetails={(b) => console.log("View:", b)}
            onReschedule={(b) => console.log("Reschedule", b)}
            onCancel={(b) => console.log("Cancel:", b)}
          />
        ))}
      </div>
    </section>
  );
}

function StudentBookingCard({
  booking,
  onViewDetails,
  onReschedule,
  onCancel,
}) {
  // Destructure booking object from backend API
  const {
    tutorImage,
    tutorName,
    courseTitle,
    subjects,
    startDate,
    endDate,
    time,
    price,
    status,
  } = booking;

  // Status badge styles (reusable & clean)
  const statusStyles = {
    confirmed: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    cancelled: "bg-red-100 text-red-700",
  };

  const statusIcons = {
    confirmed: <Check size={16} />,
    pending: <TriangleAlert size={16} />,
    cancelled: <OctagonAlert size={16} />,
  };

  // Fallback for unknown backend status
  const safeStatus = statusStyles[status] ? status : "pending";

  // Button configurations based on booking status
  const actionButtons = {
    confirmed: [
      {
        label: "View Details",
        variant: "default",
        disabled: false,
        onClick: () => onViewDetails(booking.id),
        icon: <Calendar size={16} />,
      },
      {
        label: "Cancel",
        variant: "danger",
        disabled: false,
        onClick: () => onCancel(booking.id),
        icon: null,
      },
    ],

    pending: [
      {
        label: "Reschedule",
        variant: "default",
        disabled: false,
        onClick: () => onReschedule(booking.id), // change if you add onReschedule()
        icon: <Calendar size={16} />,
      },
      {
        label: "Cancel",
        variant: "danger",
        disabled: false,
        onClick: () => onCancel(booking.id),
        icon: null,
      },
    ],

    cancelled: [
      {
        label: "Reschedule",
        variant: "default",
        disabled: true,
        onClick: null,
        icon: <Calendar size={16} />,
      },
      {
        label: "Cancel",
        variant: "danger",
        disabled: true,
        onClick: null,
        icon: null,
      },
    ],
  };

  return (
    <div className="w-full rounded-2xl bg-white p-4 sm:p-6 shadow-sm flex flex-col gap-4">
      {/* ================= MAIN CONTENT WRAPPER ================= */}
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {/* ================= LEFT SECTION ================= */}
        <div className="flex items-start gap-4">
          {/* Tutor Image */}
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
            {
              tutorImage ? (
                <img
                  src={tutorImage}
                  className="w-full h-full object-cover"
                  alt={tutorName}
                />
              ) : null /* You can add a placeholder later */
            }
          </div>

          <div>
            {/* Course Title */}
            <h2 className="text-xl font-semibold text-[#0B0C2E]">
              {courseTitle}
            </h2>

            {/* Tutor */}
            <p className="flex items-center gap-1 text-orange-600 text-sm">
              <span>
                <User />
              </span>
              {tutorName}
            </p>

            {/* Dates */}
            <div className="mt-3 space-y-2 text-sm lg:text-base xl:text-lg text-[#0B0C2E]">
              <p className="flex items-center gap-2 text-[#6B7280]">
                <Calendar size={16} />
                <span className="opacity-60">Start Date:</span> {startDate}
              </p>

              <p className="flex items-center gap-2 text-[#6B7280]">
                <Calendar size={16} />
                <span className="opacity-60">End Date:</span> {endDate}
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="flex flex-col lg:items-end gap-3">
          {/* Subjects */}
          <p className="text-base font-lg text-[#0B0C2E] text-center lg:text-right">
            {subjects}
          </p>

          {/* Time */}
          <p className="flex items-center gap-2 text-gray-600">
            <Clock size={16} />
            {time}
          </p>

          {/* Price */}
          <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full w-fit font-medium">
            {price}
          </div>

          {/* Status Badge */}
          <div
            className={`
             w-fit flex gap-1 items-center px-3 py-2 rounded-full text-sm font-medium capitalize
              ${statusStyles[safeStatus]}
            `}
          >
            {safeStatus}
            <span>{statusIcons[safeStatus]}</span>
          </div>
        </div>
      </div>

      {/* ================= ACTION BUTTONS ================= */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
        {actionButtons[safeStatus].map((btn, idx) => (
          <button
            key={idx}
            disabled={btn.disabled}
            onClick={btn.disabled ? undefined : btn.onClick}
            className={`
        flex items-center gap-2 rounded-lg px-4 py-2 transition
        ${
          btn.variant === "default"
            ? "border border-gray-300 bg-[#F1F5F9] hover:bg-gray-100 text-[#0B0C2E]"
            : ""
        }
        ${
          btn.variant === "danger"
            ? "border border-red-500 text-red-500 hover:bg-red-50"
            : ""
        }
        ${
          btn.disabled
            ? "opacity-50 cursor-not-allowed hover:bg-[#F1F5F9]"
            : "cursor-pointer"
        }
      `}
          >
            {/* ICON stays even when disabled */}
            {btn.icon && <span>{btn.icon}</span>}
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}