import React, { useContext } from "react";
import "./Toggle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { themeContext } from "../../Context";

const Toggle = () => {
  const { state, dispatch } = useContext(themeContext);
  const darkMode = state.darkMode;

  const handleClick = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <FontAwesomeIcon icon={faMoon} />
      <FontAwesomeIcon icon={faSun} />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
