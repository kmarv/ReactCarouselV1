import React, { useEffect, useState } from "react";
import "../assets/carousel.css";

const Carousel = ({ delay, children, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % children.length);
    }, delay);
    return () => clearInterval(interval);
  }, [currentIndex, delay]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % children.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex + children.length - 1) % children.length);
  };

  return (
    <div className="carousel">
      <div className="main_card">
        <div className="card">
          <div className="display">
            {images ? (
              <img src={images[currentIndex]} alt="img" />
            ) : (
              children[currentIndex]
            )}
          </div>
        </div>
        <div className="btns">
          <button className="primary_btn" onClick={handlePrevious}>
            Previous
          </button>
          <button className="secondary_btn" danger onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
