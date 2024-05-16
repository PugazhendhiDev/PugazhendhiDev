import React from "react";

function Feedback() {

    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d356890b-1e28-4059-b3b3-a7362204a6d9");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
      }
    };
  
  return (
    <>
      <div className="bg-[#111] mx-auto p-5 text-center rounded-2xl">
        <h1 className="contentRevealAnimation blurText uppercase text-xl font-bold text-purple-500">
          --- FEEDBACK ---
        </h1>
      </div>
      <div className="bg-[#111] mx-auto my-4 p-5 text-center rounded-2xl">
        <form className="mx-auto flex flex-col max-w-[500px]" onSubmit={onSubmit}>
          <input type="hidden" name="Pugazhendhi's portfolio (FEEDBACK)"/>
          <label className="contentRevealAnimation text-left mb-1 text-purple-500">Name:</label>
          <input
            className="contentRevealAnimation p-1 mb-4 bg-[#222] text-white border-2 border-purple-500 rounded-md"
            type="text"
            name="Name"
            placeholder="Enter your Name"
          />
          <label className="contentRevealAnimation text-left mb-1 text-purple-500">Email:</label>
          <input
            className="contentRevealAnimation p-1 mb-4 bg-[#222] text-white border-2 border-purple-500 rounded-md"
            type="email"
            name="Email"
            placeholder="Enter your Email"
          />
          <label className="contentRevealAnimation text-left mb-1 text-purple-500">Feedback:</label>
          <textarea
            className="contentRevealAnimation p-1 mb-4 bg-[#222] h-[100px] text-white border-2 border-purple-500 rounded-md"
            type="text"
            name="Feedback"
            placeholder="Enter your Feedback"
          />
          <button className="contentRevealAnimation p-1 mt-2 mb-4 text-center mx-auto md:mr-auto md:ml-0 w-[100px] bg-[#222] text-white hover:text-purple-500 border-2 border-purple-500 rounded-md" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Feedback;
