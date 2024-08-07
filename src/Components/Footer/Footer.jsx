import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  const defaultColor = "white";
  const defaultSize = "3rem";

  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>choudharymanisha38566@gmail.com</span>
        <div className="f-icons">
          <Insta color={defaultColor} size={defaultSize} />
          <Facebook color={defaultColor} size={defaultSize} />
          <a href="https://github.com/choudharymanisha">
            <Github color={defaultColor} size={defaultSize} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
