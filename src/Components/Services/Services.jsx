import React from "react";
import "./Services.css";
import humble from "../../img/humble.png";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import Card from "../Card/Card";
import resume from "./Resume_ManishaExp-2.pdf"
import { motion } from "framer-motion";
const Services = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <>
      <div className="services">
        <div className="awesome">
          <span>My Awesome</span>
          <span> services</span>
          <spane>
           I am a frontend developer and i have done a five
            <br />
            months internship ans now expanding my knowledge in backend 
          </spane>
          <a href = {resume} download>
          <button className="button s-button">Download CV</button>
          </a>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
          </div>
        <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={heartemoji}
            heading={"Design"}
            detail={"Figma for designing to design  dairy website"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"Html, Css, JS,Bootstrap,Tailwind Css React, Java,OOPS"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={
              "Frontend developer and now exploring backend technologies"
              }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
            </div>
            <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            
        </div>
      
    </>
  );
};

export default Services;
