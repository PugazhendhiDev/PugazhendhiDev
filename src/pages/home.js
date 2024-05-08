import MyImg from "../assets/MyImg/Pugazhendhi.png";
import Aboutpage from "./about";
import Portfolio from "./portfolio";
import Feedback from "./feedback";
import Contact from "./contact";
import "./styles/home.css";

function Homepage() {
  return (
    <>
      <div className="bg-[#111] mx-auto p-5 mb-4 text-center rounded-2xl">
        <img
          src={MyImg}
          alt="Pugazhendhi"
          className="blurBorder myImg contentRevealAnimation mx-auto border-2 border-purple-500 p-2 hover:border-4 rounded-full"
        />
        <h1 className="contentRevealAnimation mx-auto mt-4 uppercase text-4xl font-bold text-purple-500">
          Pugazhendhi
        </h1>
        <div className="blurBorder bg-[#222] mx-auto lg:w-[50%] mt-5 p-5 border-2 border-purple-500 rounded-2xl">
          <h1 className="contentRevealAnimation uppercase text-xl font-bold text-purple-500">
            A WEB DESIGNER
          </h1>
          <p className="contentRevealAnimation uppercase font-semibold text-white">
            I am a Web Designer based in India
          </p>
        </div>
      </div>

      <Aboutpage />

      <Portfolio />

      <Feedback />

      <Contact />
    </>
  );
}

export default Homepage;
