import React from "react";

const InstaCard = () => {
  return (
    <div className="lg:w-[48%] md:w-[48%] sm:w-[100%] max-sm:w-[100%] lg:ml-2 md:ml-2 h-[32%] inline-flex flex-col gap-2 justify-around mt-20">
      <a href="https://www.instagram.com/_hiteshwarkaushik/" target="_blank" className="w-full h-[70%] rounded-xl flex justify-center items-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:cursor-pointer">
        <i className="fa-brands fa-instagram text-8xl text-white"></i>
      </a>
      <div className="w-full h-[30%]">
        <h2 className="text-white text-2xl font-semibold">Instagram</h2>
        <p className="text-white font-semibold">@_hiteshwarkaushik</p>
      </div>
    </div>
  );
};

export default InstaCard;
