import React from "react";

const ResumeCard = () => {
  return (
    <div className="lg:w-[48%] md:w-[48%] sm:w-[100%] max-sm:w-[100%] lg:ml-2 md:ml-2 h-[32%] inline-flex flex-col gap-2 justify-around mt-20">
      <a
        href="https://drive.google.com/file/d/1v0_EVsDMn6gTcWsmof2zEE6Tbcj1ikIk/view?usp=sharing"
        target="_blank"
        className="w-full h-[70%] rounded-xl flex justify-center items-center bg-gray-700 hover:cursor-pointer"
      >
        <i className="fa-solid fa-file text-8xl text-gray-900"></i>
      </a>
      <div className="w-full h-[30%]">
        <h2 className="text-white text-2xl font-semibold">Resume</h2>
        <p className="text-white font-semibold">My Professional Self</p>
      </div>
    </div>
  );
};

export default ResumeCard;
