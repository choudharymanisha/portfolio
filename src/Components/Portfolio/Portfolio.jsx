import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

// Ensure these imports are correct
import tomato from "../../img/Tomato.png";
import dairy from "../../img/dairy.png";
import word from "../../img/wordscramble.png";
import pig from "../../img/pig game.png";  // Assuming the correct file name here
import sidebar from "../../img/sidebar.png"
const Portfolio = () => {
    // Log image imports to ensure they are being imported correctly
    console.log({ pig, dairy, tomato, word });

    return (
        <div className="portfolio">
            <span>Recent Projects</span>
            <span>Portfolio</span>
            
            <Swiper
              spaceBetween = {30}
              slidesPerView = {3}
              grabCursor = {true}
              className='portfolio-slider'
             >
                
                <SwiperSlide>
                    <img src={dairy} alt="Dairy Project" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tomato}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={word} alt="Word Scramble" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;
