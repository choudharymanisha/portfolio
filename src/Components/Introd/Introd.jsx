import React from "react";
import "./Introd.css";
import linked_in from "../../img/linkedin.png";
import github from "../../img/github.png";
import insta from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/pic5.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import glassemoji from "../../img/glassesimoji.png"
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Introd = () => {
  const transition = {duration : 2, type: 'spring'}
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hii! I Am</span>
          <span>Manisha Choudhary</span>
          <span>
            Frontend developer with an <br /> expertise in web designing and
            development <br /> producing quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        
        <div className="i-icons">
          <a href="https://www.linkedin.com/in/manishachoudhary38/">
            <img src={linked_in} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="https://github.com/choudharymanisha">
            <img src={github} alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="Vector 1" />
        <img src={vector2} alt="Vector 2" />
        <img src={boy} alt="Boy" style = {{height:'300px',width:'300px'}}  />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassemoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        
        <div className="blur" style = {{background:"rgb(238 210 255)"}}> </div>
        <div className="blur" style ={{
          background:'#C1F5FF',
          top:'17rem',
          width:'21rem',
          height:'11rem',
          left:'-9rem'

        }}></div>
      </div>
    </div>
  );
};

export default Introd;
