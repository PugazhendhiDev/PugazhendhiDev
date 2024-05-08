function Feedback() {
  return (
    <>
      <div className="bg-[#111] mx-auto p-5 text-center rounded-2xl">
        <h1 className="contentRevealAnimation blurText uppercase text-xl font-bold text-purple-500">
          --- FEEDBACK ---
        </h1>
      </div>
      <div className="bg-[#111] mx-auto my-4 p-5 text-center rounded-2xl">
        <form className="mx-auto flex flex-col max-w-[500px]">
          <label className="contentRevealAnimation text-left mb-1 text-purple-500">Name:</label>
          <input
            className="contentRevealAnimation p-1 mb-4 bg-[#222] text-white border-2 border-purple-500 rounded-md"
            type="text"
            placeholder="Enter your Name"
          />
          <label className="contentRevealAnimation text-left mb-1 text-purple-500">Email:</label>
          <input
            className="contentRevealAnimation p-1 mb-4 bg-[#222] text-white border-2 border-purple-500 rounded-md"
            type="email"
            placeholder="Enter your Email"
          />
          <label className="contentRevealAnimation text-left mb-1 text-purple-500">Feedback:</label>
          <textarea
            className="contentRevealAnimation p-1 mb-4 bg-[#222] text-white border-2 border-purple-500 rounded-md"
            type="text"
            placeholder="Enter your Feedback"
          />
        </form>
      </div>
    </>
  );
}

export default Feedback;
