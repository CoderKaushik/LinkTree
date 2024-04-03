import React from "react";
import WebsiteCard from "./WebsiteCard";
import GithubCard from "./GithubCard";
import InstaCard from "./InstaCard";
import LinkedInCard from "./LinkedInCard";
import GoogleDevCard from "./GoogleDevCard";

const Container = () => {
  return (
    <div className="w-[80%] h-screen p-2">
      <div className="w-full h-8 ">
        <p className="text-white font-semibold pt-8">hiteshwar's links</p>
      </div>
      <WebsiteCard />
      <GithubCard />
      <LinkedInCard />
      <InstaCard />
      <GoogleDevCard />
    </div>
  );
};

export default Container;
