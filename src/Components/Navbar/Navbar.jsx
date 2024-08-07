import React from "react";
import './Navbar.css'
import { Link } from "react-scroll";
const Navbar = ()=>{
    return(
        <>
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Manisha Choudhary</div>
                
            </div>
            <div className="n-right">
                <div className="n-list">
                <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
                </div>
               
            </div>
        
        
        
        </>
    )

}
export default Navbar