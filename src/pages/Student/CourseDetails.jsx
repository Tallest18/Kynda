import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Clock4,
  GraduationCap,
  BookOpen,
  FileQuestionMark,
  ChartColumnBig,
  ChevronDown,
  ChevronUp,
  Check,
  StickyNote,
} from "lucide-react";
import { MdVerified } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { FaStar, FaRegStar } from "react-icons/fa";
import { BsReply } from "react-icons/bs";
import BookingImg from "/images/booktutor.jpg";
import profileImg from "/images/tutor.jpg";
import StudentNavbar from "../../components/StudentNavbar"

export default function CourseDetails() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when component mounts
  }, []);

  return (
    <>
      <section className="bg-[#0B0C2E]">
        <StudentNavbar />
        <div className="max-w-screen-2xl mx-auto px-4 py-8 grid grid-cols-2">
          <div>
            <h1 className="text-white text-4xl">
              The ultimate guide to the best wordpress LMS Plugin
            </h1>
            <div className="flex gap-6 text-white mt-4 flex-wrap">
              <p className="flex gap-2">
                <Clock4 color="#FF782D" />5 weeks
              </p>
              <p className="flex gap-2">
                <GraduationCap color="#FF782D" />
                156 students taught
              </p>
              <p className="flex gap-2">
                <ChartColumnBig color="#FF782D" />
                All levels
              </p>
              <p className="flex gap-2">
                <BookOpen color="#FF782D" />5 lessons
              </p>
              <p className="flex gap-2">
                <FileQuestionMark color="#FF782D" />5 Quizes
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="bg-[#00A9C1] py-2 px-4 text-white rounded-lg active:scale-95 duration-200 cursor-pointer">
                Mathematics
              </button>
              <button className="bg-[#00A9C1] py-2 px-4 text-white rounded-lg active:scale-95 duration-200 cursor-pointer">
                Physics
              </button>
              <button className="bg-[#00A9C1] py-2 px-4 text-white rounded-lg active:scale-95 duration-200 cursor-pointer">
                Chemistry
              </button>
            </div>
          </div>

          <div>
            <figure className="h-[420px] w-[380px] bg-white mx-auto rounded-xl overflow-hidden">
              <img
                src={BookingImg}
                alt="booking photo"
                className="w-full h-3/5"
              />
              <div className="p-4">
                <div className="flex justify-between">
                  <p className="flex gap-2">
                    <span className="text-[#6B7280]">$59.0</span>
                    <span className="text-[#00A9C1] font-semibold text-2xl">
                      $49.0
                    </span>
                  </p>
                  <button className="bg-[#1E2382] font-semibold text-white py-3 px-4 rounded-lg active:scale-95 duration-200 cursor-pointer">
                    Book Session Now
                  </button>
                </div>

                {/* profile image footer section and view details */}
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-2 items-center">
                    <figure className="w-12 h-12 overflow-hidden rounded-full">
                      <img
                        src={profileImg}
                        alt="profile"
                        className="w-full h-full rounded-full"
                      />
                    </figure>
                    <div>
                      <p className="flex items-center gap-1 text-sm text-[#0B0C2E] capitalize font-semibold">
                        Belrah Mercy
                        <MdVerified color="#4CAF50" size={18} />
                      </p>
                      <span className="text-sm text-[#6B7280] capitalize">
                        Science tutor
                      </span>
                    </div>
                  </div>
                  <Link className="text-[#1E2382] font-medium capitalize underline">
                    view tutor details
                  </Link>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* the tabs navigation section goes here */}
      <section>
        <div className="max-w-screen-2xl mx-auto px-4 py-8 ">
          <TabsSection>
            <TabsItemOverview />
            <TabsItemCurriculum>
              <TabsCurriculumAccordion>
                <TabsCurriculumAccordionItem />
                <TabsCurriculumAccordionItem isAvailable={false} />
                <TabsCurriculumAccordionItem isAvailable={false} />
              </TabsCurriculumAccordion>

              <TabsCurriculumAccordion>
                <TabsCurriculumAccordionItem />
                <TabsCurriculumAccordionItem isAvailable={false} />
                <TabsCurriculumAccordionItem isAvailable={false} />
              </TabsCurriculumAccordion>

              <TabsCurriculumAccordion>
                <TabsCurriculumAccordionItem />
                <TabsCurriculumAccordionItem isAvailable={false} />
                <TabsCurriculumAccordionItem isAvailable={false} />
              </TabsCurriculumAccordion>
            </TabsItemCurriculum>
            <TabsItemReviews />
          </TabsSection>
        </div>

        <FormCommentsSection />
      </section>
    </>
  );
}

function TabsSection({ children }) {
  const [active, setActive] = useState(0);
  return (
    <div className="max-w-3xl shadow rounded-xl">
      <nav className="grid grid-cols-3 border border-gray-200 rounded-t-xl">
        <button
          onClick={() => setActive(0)}
          className={`p-4 text-[#2D2D2D] text-lg cursor-pointer border-r border-gray-200 ${
            active === 0 ? "bg-gray-100 font-semibold text-[#FF6839]" : ""
          }`}
        >
          Overview
        </button>

        <button
          onClick={() => setActive(1)}
          className={`p-4 text-[#2D2D2D] text-lg cursor-pointer border-r border-gray-200 ${
            active === 1 ? "bg-gray-100 font-semibold text-[#FF6839]" : ""
          }`}
        >
          Curriculum
        </button>

        <button
          onClick={() => setActive(2)}
          className={`p-4 text-[#2D2D2D] text-lg cursor-pointer ${
            active === 2 ? "bg-gray-100 font-semibold text-[#FF6839]" : ""
          }`}
        >
          Reviews
        </button>
      </nav>
      {children[active]}
    </div>
  );
}

// Removed unused selectedId parameter
function TabsItemOverview() {
  return (
    <article className="p-6">
      <p className="text-[#344256]">
        Master Mathematics, Physics, and Chemistry with ease! Whether you're
        preparing for exams like WAEC, NECO, JAMB, or just need extra support in
        class, I'll help you break down complex concepts into simple,
        easy-to-understand lessons. With personalized teaching methods,
        real-world examples, and step-by-step guidance, you'll gain the
        confidence and skills to solve problems effectively. Book a session
        today and take the first step towards better grades and a stronger
        foundation in science and mathematics. Master Mathematics, Physics, and
        Chemistry with ease! Whether you're preparing for exams like WAEC, NECO,
        JAMB, or just need extra support in class, I'll help you break down
        complex concepts into simple, easy-to-understand lessons. With
        personalized teaching methods, real-world examples, and step-by-step
        guidance, you'll gain the confidence and skills to solve problems
        effectively. Book a session today and take the first step towards better
        grades and a stronger foundation in science and mathematics.
      </p>
    </article>
  );
}

function TabsItemCurriculum({ children }) {
  return (
    <article className="p-6">
      <p className="leading-normal text-[#344256] mb-4">
        This 6-week curriculum blends Mathematics, Physics, and Chemistry into a
        structured learning journey. Each week introduces a key concept,
        reinforced with practical examples and problem-solving sessions. With
        lessons and quizzes, you'll build mastery step by step and prepare
        confidently for exams.
      </p>
      {children}
    </article>
  );
}

function TabsCurriculumAccordion({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="shadow rounded-lg grid grid-cols-1 gap-4 p-4 ">
      <header
        className="flex justify-between cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <button className="inline-flex cursor-pointer">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
          <span className={`${isOpen ? "text-[#FF6839]" : "text-[#2D2D2D]"}`}>
            week1-foundations
          </span>
        </button>
        <p>
          <span>5 lessons</span>
          <span>45 mins</span>
        </p>
      </header>
      {/* the accordion content goes here */}
      {isOpen ? (
        <>
          <div className="grid grid-cols-1 gap-4">{children}</div>
        </>
      ) : null}
    </div>
  );
}

function TabsCurriculumAccordionItem({ isAvailable = true }) {
  return (
    <div className="flex justify-between">
      <h3 className="flex gap-1 text-[#2D2D2D]">
        <StickyNote />
        Maths:Algebra basics - solving linear equations
      </h3>
      <div className="flex gap-4 items-center">
        <button className="bg-[#F1F5F9] text-[#2D2D2D] font-medium py-1 px-2 border border-[#E2E8F0] rounded-lg active:scale-95 duration-100 cursor-pointer">
          preview
        </button>
        <p className="text-[#344256]">12:30</p>
        {isAvailable ? <Check size={16} /> : <IoMdLock size={16} />}
      </div>
    </div>
  );
}

function FormCommentsSection() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-8 ">
      <div className="max-w-3xl">
        <h3 className="text-[#2D2D2D] font-semibold text-2xl mb-4">
          Leave a comment
        </h3>
        <p className="text-[#344256] mb-6">
          Your email address will not be published. Required fields are marked *
        </p>

        {/* here is the form section */}
        <form onSubmit={(e) => e.preventDefault()} className="">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Anable"
              name="username"
              className="px-4 py-3 rounded-lg border border-gray-300 outline-none"
            />

            <input
              type="email"
              placeholder="example@gmail.com"
              name="email"
              className="px-4 py-3 rounded-lg border border-gray-300 outline-none"
            />
          </div>

          <div className="mt-6 mb-4">
            <textarea
              name="comments"
              placeholder="leave a comment"
              className="w-full h-56 p-4 outline-none border border-gray-300 rounded-xl resize-none"
            ></textarea>
          </div>
          <div className="flex gap-2 mb-4">
            <input type="checkbox" name="save" />
            <label>
              Save my name, email in this browser for the next time I comment
            </label>
          </div>
          <button className="bg-[#1E2382] py-3 px-6 text-white rounded-xl active:scale-95 duration-200 cursor-pointer">
            Post Comments
          </button>
        </form>
      </div>
    </div>
  );
}

function TabsItemReviews() {
  return (
    <article className="p-6">
      <h3 className="text-2xl mb-4 font-medium">Comments</h3>
      <div className="flex gap-4 items-center">
        <p className="text-3xl">4.0</p>
        <div>
          <div className="flex gap-1">
            <FaStar color="#FFA726" size={24} />
            <FaStar color="#FFA726" size={24} />
            <FaStar color="#FFA726" size={24} />
            <FaStar color="#FFA726" size={24} />
            <FaRegStar color="#FFA726" size={24} />
          </div>
          <p>based on 149,561 ratings</p>
        </div>
      </div>

      {/* all the ratings by the various individuals for the course */}
      <div className="flex flex-col gap-2 border-b border-gray-300 pt-6 pb-6">
        <Ratings rating={5} percentage={90} />
        <Ratings rating={4} percentage={5} />
        <Ratings rating={3} percentage={2} />
        <Ratings rating={2} percentage={2} />
        <Ratings rating={1} percentage={1} />
      </div>

      {/* the comments section for the review items */}
      <Comments />
      <Comments />
      <Comments />
      <Comments />
    </article>
  );
}

function Ratings({ rating = 0, percentage = 0 }) {
  // Create an array of 5 stars and fill based on rating
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div className="flex gap-2 items-center w-full">
      {/* stars */}
      <div className="flex gap-1">
        {stars.map((isFilled, i) =>
          isFilled ? (
            <FaStar key={i} color="#FFA726" size={16} />
          ) : (
            <FaRegStar key={i} color="#FFA726" size={16} />
          )
        )}
      </div>

      {/* percentage number */}
      <p>{percentage}%</p>

      {/* slider bar */}
      <div className="h-3 flex-1 bg-[#E2E8F0] rounded">
        <div
          className="h-full bg-[#FFA726] rounded"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function Comments() {
  return (
    <article className="flex gap-2 py-4 border-b border-gray-200">
      {/* user profile image */}
      <figure className="w-[50px] h-[50px] bg-orange-300 rounded-full shrink-0"></figure>
      {/* comment details goes here */}
      <div className="flex flex-col">
        <header className="flex justify-between">
          <div className="flex gap-2">
            <p className="text-lg">Emeka Nwosu</p>
            <p className="inline-flex gap-1">
              4.5 <FaStar color="#FFA726" size={18} />
            </p>
          </div>

          {/* the date of the comment */}
          <time className="text-sm">March 15, 2025</time>
        </header>

        {/* The main comment goes here */}
        <p className="text-[#344256] text-sm leading-normal my-1">
          This tutor is amazing! He explained algebra and motion in such a
          simple way that I finally understood. My grades have already improved
        </p>
        <button className="cursor-pointer text-sm flex inline-flex gap-2 w-max p-1">
          <BsReply color="#FFA726" size={18} />
          Reply
        </button>
      </div>
    </article>
  );
}