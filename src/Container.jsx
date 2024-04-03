import React from "react";
import WebsiteCard from "./WebsiteCard";
import GithubCard from "./GithubCard";
import InstaCard from "./InstaCard";
import LinkedInCard from "./LinkedInCard";
import GoogleDevCard from "./GoogleDevCard";
import ResumeCard from "./ResumeCard";

const Container = () => {
  return (
    <div className="w-[80%] h-screen p-2">
      <div className="w-full h-8 ">
        <p className="text-white font-semibold pt-8">hiteshwar's links</p>
      </div>
      <WebsiteCard />
      <GithubCard />
      <LinkedInCard />
      <ResumeCard />
      <GoogleDevCard />
      <InstaCard />
    </div>
  );
};

export default Container;
