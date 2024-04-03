import React from "react";

const WebsiteCard = () => {

      return (
      <div className="lg:w-[48%] md:w-[48%] sm:w-[100%] max-sm:w-[100%] lg:mr-2 md:mr-2 h-[32%] inline-flex flex-col gap-2 justify-around mt-20">
        <a href="https://www.hiteshwarkaushik.tech" target="_blank" className="w-full h-[70%] rounded-xl flex justify-center items-center bg-black hover:cursor-pointer">
          <i className="fa-solid fa-compass text-8xl text-[#484848]"></i>
        </a>
        <div className="w-full h-[30%]  ">
          <h2 className="text-white text-2xl font-semibold">
            Website
          </h2>
          <p className="text-white font-semibold">checkout my work!</p>
        </div>
      </div>
      );
};

export default WebsiteCard;
