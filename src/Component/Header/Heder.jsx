import { useState } from "react";
const Heder = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="navbar bg-base-100 container mx-auto py-[43px] px-[20px] md:px-[120px]">
        <div className="flex-1">
          <a className="btn btn-ghost text-[28px] md:text-[34px] mon700 text-[#054C73]">
            Furniture
          </a>
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal mon600 text-[14px] text-[#333333] space-x-[20px] md:space-x-[73px] cursor-pointer">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Doctors</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
          </ul>
        </div>
        <div className="flex-none md:hidden">
          <button className="btn btn-ghost text-[#054C73]" onClick={() => setOpen(!open)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div  className="md:hidden absolute w-[90%] mt-[-30px]  p-5 bg-[#ebebeb]">
          <ul className="menu mon600 text-[14px] text-[#333333] space-y-3">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Doctors</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Heder;
