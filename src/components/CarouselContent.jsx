
import React from "react";
import "./Style.css";
import Carousel from "./Carousel";
import {CarouselData} from "./CarouselData";

const CarouselContent = () => {
    return (
        <div className="carousel_section">
            <Carousel>

                {CarouselData.map(({id, pic, title_h2,text_h3,button_h2}) => {
                    return (
                        <div key={id} className='slider_section'>

                            <img src={pic} alt="pic" className="slider_pic" />

                            <div className="slider_content">

                                <div className="slider_text">

                                    <h2 className="slider_h2"> {title_h2} </h2>
                                    <h3 className="slider_h3"> {text_h3} </h3>

                                </div>

                                <button className="slider_button">
                                    <h2 className="slider_button_h2"> {button_h2} </h2>
                                </button>

                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default CarouselContent;
