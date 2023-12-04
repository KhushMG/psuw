import React, { useState } from "react";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <ul
          className={
            isOpen
              ? "z-10 absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
              : "hidden"
          }
        >
          <li className="py-6 text-4xl hover:scale-110 duration-300">
            <a href="/">home</a>
          </li>
          <li className="py-6 text-4xl hover:scale-110 duration-300">
            <a href="/about">about</a>
          </li>
          <li className="py-6 text-4xl hover:scale-110 duration-300">
            <a href="/experience">experience</a>
          </li>
          <li className="py-6 text-4xl hover:scale-110 duration-300">
            <a href="/projects">projects</a>
          </li>
        </ul>
      </button>
    </div>
  );
};

export default Hamburger;