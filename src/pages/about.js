import MyImg from "../assets/MyImg/Pugazhendhi.png";
import "./styles/about.css";

function Aboutpage() {
  return (
    <>
      <div className="bg-[#111] mx-auto p-5 text-center rounded-2xl">
        <h1 className="contentRevealAnimation blurText uppercase text-xl font-bold text-purple-500">
          --- ABOUT ---
        </h1>
      </div>
      <div className="bg-[#111] mx-auto my-4 p-5 text-center rounded-2xl">
        <img
          src={MyImg}
          alt="Pugazhendhi"
          className="contentRevealAnimation blurBorder myImg mx-auto border-2 border-purple-500 p-2 hover:border-4 rounded-full"
        />
        <h1 className="contentRevealAnimation mx-auto mt-4 uppercase text-4xl font-bold text-purple-500">
          Pugazhendhi
        </h1>
        <div className="blurBorder bg-[#222] mx-auto lg:w-[50%] mt-5 p-5 border-2 border-purple-500 rounded-2xl">
          <h1 className="contentRevealAnimation uppercase text-xl font-bold text-purple-500">
            A WEB DESIGNER
          </h1>
          <p className="contentRevealAnimation uppercase font-semibold text-white">
            Passionate coder exploring various languages. Dedicated to learning,
            crafting solutions, and embracing growth.
          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutpage;
