import React from "react";

function Contact() {
  return (
    <>
      <div className="bg-[#111] mx-auto p-5 text-center rounded-2xl">
        <h1 className="contentRevealAnimation blurText uppercase text-xl font-bold text-purple-500">
          --- CONTACT ---
        </h1>
      </div>
      <div className="my-2 mb-6 p-1 md:p-10 bg-[#111] justify-center flex flex-col gap-2 md:flex-row rounded-2xl">
        <div className="bg-[#222] justify-center my-1 mx-1 p-2 md:p-4 font-semibold text-center border-2 border-purple-500 rounded-xl md:rounded-2xl">
          <a
            href="mailto:pugazhendhiexplorer@gmail.com"
            className="contentRevealAnimation flex gap-2 max-w-[260px] mx-auto"
          >
            <div className="blurBorder my-auto w-6 h-6 md:w-10 md:h-10 bg-purple-500 text-white p-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h1 className="text-sm md:text-md text-white hover:text-purple-500 my-auto">
              pugazhendhiexplorer@gmail.com
            </h1>
          </a>
        </div>
        <div className="bg-[#222] justify-center my-1 mx-1 p-2 md:p-4 font-semibold text-center border-2 border-purple-500 rounded-xl md:rounded-2xl">
          <a
            href="https://github.com/PugazhendhiDev/"
            className="contentRevealAnimation flex gap-2 max-w-[260px] mx-auto"
          >
            <div className="blurBorder my-auto w-6 h-6 md:w-10 md:h-10 bg-purple-500 text-white p-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h1 className="text-sm md:text-md text-white hover:text-purple-500 my-auto">
              github.com/PugazhendhiDev
            </h1>
          </a>
        </div>
        <div className="bg-[#222] justify-center my-1 mx-1 p-2 md:p-4 font-semibold text-center border-2 border-purple-500 rounded-xl md:rounded-2xl">
          <a
            href="https://instagram.com/pugazhendhi_dev/"
            className="contentRevealAnimation flex gap-2 max-w-[260px] mx-auto"
          >
            <div className="blurBorder my-auto w-6 h-6 md:w-10 md:h-10 bg-purple-500 text-white p-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h1 className="text-sm md:text-md text-white hover:text-purple-500 my-auto">
              instagram.com/pugazhendhi_dev
            </h1>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
