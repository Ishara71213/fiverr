import React from "react";
import Slider from "infinite-react-carousel";
import "./Slide.scss";

const Slide = ({ children, slidesToShow, arrowsScroll, title }) => {
  return (
    <div className="slide">
      <div className="container">
        {title && <h1>{title}</h1>}
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
