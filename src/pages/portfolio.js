import React from "react";

function Portfolio() {
  return (
    <>
      <div className="bg-[#111] mx-auto p-5 text-center rounded-2xl">
        <h1 className="contentRevealAnimation blurText uppercase text-xl font-bold text-purple-500">
          --- PORTFOLIO ---
        </h1>
      </div>
      <div className="bg-[#111] mx-auto my-4 p-5 text-white text-left rounded-2xl">
        <h1 className="contentRevealAnimation blurText my-2 font-bold text-purple-500 text-[18px] lg:text-3xl uppercase pl-4 border-l-2 border-purple-500 lg:pr-5 lg:mr-5">
          Bio Data:
        </h1>
        <ul className="list-disc ml-10 mb-4">
          <li className="contentRevealAnimation">Name: D. Pugazhendhi</li>
          <li className="contentRevealAnimation">Age: 17</li>
          <li className="contentRevealAnimation">
            Qualification: 12th Standard
          </li>
        </ul>
        <h1 className="contentRevealAnimation blurText my-2 font-bold text-purple-500 text-[18px] lg:text-3xl uppercase pl-4 border-l-2 border-purple-500 lg:pr-5 lg:mr-5">
          Skills:
        </h1>
        <ul className="list-disc ml-10 mb-4">
          <li className="contentRevealAnimation">
            Programming Languages: JavaScript, Python, C++, C#
          </li>
          <li className="contentRevealAnimation">
            Libraries: React.js.
          </li>
          <li className="contentRevealAnimation">
            Frameworks: Python Flask, Tailwind CSS (CSS FRAMEWORK).
          </li>
        </ul>
        <h1 className="contentRevealAnimation blurText my-2 font-bold text-purple-500 text-[18px] lg:text-3xl uppercase pl-4 border-l-2 border-purple-500 lg:pr-5 lg:mr-5">
          Profession:
        </h1>
        <ul className="list-disc ml-10 mb-4">
          <li className="contentRevealAnimation">
            Web Developer: Proficient in building dynamic and responsive
            websites using HTML, CSS, JavaScript, nodejs, and using library like React.js and Tailwind CSS (CSS FRAMEWORK).
          </li>
          <li className="contentRevealAnimation">
            Game Developer: Experienced in game development in Unity.
          </li>
        </ul>
        <h1 className="contentRevealAnimation blurText my-2 font-bold text-purple-500 text-[18px] lg:text-3xl uppercase pl-4 border-l-2 border-purple-500 lg:pr-5 lg:mr-5">
          Projects:
        </h1>
        <ul className="list-decimal ml-10 mb-4">
          <li className="contentRevealAnimation">
            Personal Website: Created a portfolio website showcasing skills and
            projects.
          </li>
          <li className="contentRevealAnimation">
            React.js Project: Developed a responsive web application using
            React.js.
          </li>
          <li className="contentRevealAnimation">
            Game Development: Created a Flight Simulator game in Unity using C#.
          </li>
        </ul>
        <h1 className="contentRevealAnimation blurText my-2 font-bold text-purple-500 text-[18px] lg:text-3xl uppercase pl-4 border-l-2 border-purple-500 lg:pr-5 lg:mr-5">
          Contact Information:
        </h1>
        <ul className="list-disc ml-10 mb-4">
          <li className="contentRevealAnimation">Email: pugazhendhiexplorer</li>
          <p className="contentRevealAnimation">@gmail.com</p>
        </ul>
      </div>
    </>
  );
}

export default Portfolio;
