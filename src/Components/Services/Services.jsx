import React from "react";
import "./Services.css";
import humble from "../../img/humble.png";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import Card from "../Card/Card";
import resume from "./Resume_ManishaExp-2.pdf";
import { motion } from "framer-motion";

const Services = () => {
  const transition = {
    duration: 1, 
    type: "spring",
  };

  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <spane>
          "Passionate about building, from pixels to pipelines. I focus on both detail and strategy, creating applications
          <br />
          that are dynamic, dependable, and engaging at every layer."
        </spane>
        <a href={resume} download>
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
            detail={"Figma for designing dairy website"}
          />
        </motion.div>
        
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={glasses}
            heading={"Fullstack Developer"}
            detail={"JS, Bootstrap, Tailwind CSS, React, Java, Spring Boot, Microservices, Security, Azure, Docker"}
          />
        </motion.div>
        
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={"FullStack developer and now exploring Azure"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
      </div>
      <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
    </div>
  );
};

export default Services;
