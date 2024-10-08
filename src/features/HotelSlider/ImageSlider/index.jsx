import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./style.scss";

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  function nextImg() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }
  function prevImg() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="body" style={{}}>
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          borderRadius: "4px",
        }}
      >
        {images.map((imageUrl) => (
          <img
            key={imageUrl}
            src={imageUrl}
            alt=""
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <div className="btn">
        <button className="btn-left" onClick={prevImg}>
          <KeyboardArrowLeftIcon />
        </button>
        <button className="btn-right" onClick={nextImg}>
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
