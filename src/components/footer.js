import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-purple-300 p-5 mb-4 rounded-2xl border-2 border-purple-500 bg-opacity-95 blurBorder">
        <h1 className="footerAnimation my-2 font-bold text-[22px] lg:text-3xl uppercase pl-2 border-l-2 border-purple-500 lg:pr-5 lg:mr-5">
          Contact Us
        </h1>
        <div className="my-2 mb-6 justify-center flex flex-col md:flex-row">
          <div className="bg-[#fff] justify-center my-1 mx-1 p-2 font-semibold text-center border-2 border-purple-500 rounded-xl">
            <a
              href="mailto:pugazhendhiexplorer@gmail.com"
              className="footerAnimation max-w-[260px] mx-auto"
            >
              <h1 className="text-sm md:text-md text-black hover:text-purple-500 my-auto">
                pugazhendhiexplorer@gmail.com
              </h1>
            </a>
          </div>
          <div className="bg-[#fff] justify-center my-1 mx-1 p-2 font-semibold text-center border-2 border-purple-500 rounded-xl">
            <a
              href="https://github.com/PugazhendhiDev/"
              className="footerAnimation max-w-[260px] mx-auto"
            >
              <h1 className="text-sm md:text-md text-black hover:text-purple-500 my-auto">
                github.com/PugazhendhiDev
              </h1>
            </a>
          </div>
          <div className="bg-[#fff] justify-center my-1 mx-1 p-2 font-semibold text-center border-2 border-purple-500 rounded-xl">
            <a
              href="https://www.linkedin.com/in/pugazhendhi-dhamodharan-24962832b"
              className="footerAnimation max-w-[260px] mx-auto"
            >
              <h1 className="text-sm md:text-md text-black hover:text-purple-500 my-auto">
                LinkedIn: Pugazhendhi Dhamodharan
              </h1>
            </a>
          </div>
        </div>
        <div className="my-2 p-2 bg-white border-2 border-purple-500 rounded-xl">
          <p className="footerAnimation text-center">
            &copy; 2024 Pugazhendhi. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
