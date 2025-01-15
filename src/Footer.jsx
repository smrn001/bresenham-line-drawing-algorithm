import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 text-gray-500 w-full flex flex-col items-center">
      <p className="hover:text-gray-800 hover:underline text-center">
        Made by <a href="https://www.samirn.com.np">Samir Niroula</a>
      </p>
      <p className="hover:text-gray-800 hover:underline">
        <a
          href="https://github.com/smrn001/bresenham-line-drawing-algorithm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center "
        >
          Source code
        </a>
      </p>
    </footer>
  );
};

export default Footer;
