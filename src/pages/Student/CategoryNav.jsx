import { useState } from "react";
import { ListFilter, X, Search, ChevronDown } from "lucide-react";

const category = [
  "science",
  "english",
  "mathematics",
  "art",
  "exam prep",
  "literacy",
  "junior classes",
  "senior classes",
  "WAEC/NECO",
  "JAMB/UTME",
];

export default function CategoryNav() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const handleToggleSearch = () => {
    setToggleSearch((prev) => !prev);
  };
  return (
    <section className="bg-[#0B0C2E] py-3">
      <div className="max-w-screen-2xl mx-auto flex justify-between px-4">
        <div className="flex gap-2 flex-wrap">
          {category.map((cat) => (
            <button
              className="text-white text-sm font-medium capitalize bg-white/10 px-4 py-2 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
              key={cat}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative">
          <button
            className="inline-flex gap-2 bg-[#FF6839] text-white px-4 py-2 rounded-full cursor-pointer transition-transform active:scale-95"
            onClick={handleToggleSearch}
          >
            Filter <ListFilter size={18} />
          </button>
          {toggleSearch && <SearchFilter onClose={handleToggleSearch} />}
        </div>
      </div>
    </section>
  );
}

function SearchFilter({ onClose }) {
  return (
    <div className="absolute top-full right-0  translate-y-2 bg-white w-[448px] py-4 shadow z-50 rounded-xl">
      <header className="flex justify-between px-4 pb-2 border-b border-gray-200">
        <h3>search on kynda</h3>
        <button
          className="flex justify-center items-center w-7 h-7 bg-[#E2E8F0] rounded-full cursor-pointer"
          onClick={onClose}
        >
          <X size={16} color="#2D2D2D" />
        </button>
      </header>

      {/* the search and form elements goes here */}
      <form onSubmit={(e) => e.preventDefault()} className="py-4 px-4">
        <div className="flex border border-gray-200 rounded-full mb-4">
          <span className="flex justify-between items-center px-2">
            <Search color="#6B7280" size={18} />
          </span>

          <input
            type="search"
            name="search"
            placeholder="search"
            className="w-full py-2 px-2 outline-none"
          />
        </div>
        <h3 className="capitalize mb-1 text-sm font-semibold text-[#2D2D2D]">
          filter results by:
        </h3>
        <p className="text-sm text-[#7D8487] mb-4">
          select a category and click the dropdown
        </p>

        {/* the filter categories sections */}
        <div className="flex gap-1 flex-wrap">
          <button className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-md p-1 text-[#344256] text-sm inline-flex items-center cursor-pointer">
            Courses
            <ChevronDown color={"#999999"} />
          </button>

          <button className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-md p-1 text-[#344256] text-sm inline-flex items-center cursor-pointer">
            Price
            <ChevronDown color={"#999999"} />
          </button>

          <button className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-md p-1 text-[#344256] text-sm inline-flex items-center cursor-pointer">
            Tutors
            <ChevronDown color={"#999999"} />
          </button>

          <button className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-md p-1 text-[#344256] text-sm inline-flex items-center cursor-pointer">
            Date
            <ChevronDown color={"#999999"} />
          </button>

          <button className="bg-[#F1F5F9] border border-[#E2E8F0] rounded-md p-1 text-[#344256] text-sm inline-flex items-center cursor-pointer">
            Availability
            <ChevronDown color={"#999999"} />
          </button>
        </div>

        <h3 className="mt-4 mb-2 text-[#2D2D2D]">Results:</h3>
        <ul className="flex flex-col gap-1 text-sm text-[#7D8487]">
          <li className="flex gap-1 items-center">
            <X />
            Science: mathematics, Physics, Chemistry
          </li>
          <li className="flex gap-1 items-center">
            <X />
            Science: mathematics, Physics, Chemistry
          </li>
        </ul>
      </form>
    </div>
  );
}