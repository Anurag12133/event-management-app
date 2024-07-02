"use client";
import { NavbarDemo } from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import "@/app/css/content.css";

import React from "react";

const Landing = () => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/pages/selection");
  };
  return (
    <div>
      <NavbarDemo />

      <div className="wrapper">
        <div className="one">
          <div className="large-text">Participate here!</div>
          <p className="small-text">
            "Participating in tech events
            <br />
            opens doors to new opportunity
            <br />
            and fosters a community of lifelong Learners"
          </p>
        </div>
        <div className="two">
          <div>
            <img
              className="landing-img"
              src="https://t4.ftcdn.net/jpg/05/14/82/31/360_F_514823175_31tWpLnkJic8bc97YB3QvT2kMIWmosgA.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="three">
          <button onClick={handleButtonClick}>Click here</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
