import React from "react";
import Hero from "../components/Hero";
import WhatWeDo from "./AboutComponents/WhatWeDo";
import TeamMembers from "./AboutComponents/TeamMembers";
import FollowOnInsta from "./AboutComponents/FollowOnInsta";

const About = () => {
  return (
    <div>
      <Hero heading={"About Us"} path={"About Us"} />
      <WhatWeDo />
      <TeamMembers />
      <FollowOnInsta />
    </div>
  );
};

export default About;
