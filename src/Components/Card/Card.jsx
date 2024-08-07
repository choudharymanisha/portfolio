import React from "react";
import "./Card.css"
const Card = ({emoji,heading,detail})=>{
    return(
        <>
        <div className="card">
            <img src = {emoji}/>
            <span>{heading}</span>
            <span>{detail}</span>
            <button className=" button c-button">Learn More</button>
        </div>
        </>
    )
}
export default Card