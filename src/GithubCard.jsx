import React from "react";

const GithubCard = () => {
  return (
    <div className="lg:w-[48%] md:w-[48%] sm:w-[100%] max-sm:w-[100%] lg:ml-2 md:ml-2 h-[32%] inline-flex flex-col gap-2 justify-around mt-20">
      <a href="https://www.github.com/coderkaushik" target="_blank" className="w-full h-[70%] rounded-xl flex justify-center items-center bg-white hover:cursor-pointer">
        <i className="fa-brands fa-github text-8xl text-black"></i>
      </a>
      <div className="w-full h-[30%]  ">
        <h2 className="text-white text-2xl font-semibold">Github</h2>
        <p className="text-white font-semibold">@CoderKaushik</p>
      </div>
    </div>
  );
};

export default GithubCard;
