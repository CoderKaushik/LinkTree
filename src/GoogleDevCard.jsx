import React from "react";
import Google from "./assets/google.png";

const GoogleDevCard = () => {
  return (
    <div className="lg:w-[48%] md:w-[48%] sm:w-[100%] max-sm:w-[100%] lg:mr-2 md:mr-2 h-[32%] inline-flex flex-col gap-2 justify-around mt-20">
      <a href="https://gdsc.community.dev/u/m22ctj/#/about" target="_blank" className="w-full h-[70%] rounded-xl flex justify-center items-center hover:cursor-pointer" style={{ backgroundImage: `url(${Google})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <i className="fa-brands fa-google text-8xl text-white"></i>
      </a>
      <div className="w-full h-[30%]">
        <h2 className="text-white text-2xl font-semibold">GDSC Community Profile</h2>
        <p className="text-white font-semibold">Hiteshwar Kaushik</p>
      </div>
    </div>
  );
};

export default GoogleDevCard;
