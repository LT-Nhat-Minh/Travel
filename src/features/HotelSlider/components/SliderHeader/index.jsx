import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

SliderHeader.propTypes = {
  header: PropTypes.object.isRequired,
};

function SliderHeader({ header }) {
  return (
    <div className="SliderHeader">
      <div>
        <h2>{header.heading}</h2>
        <h3>{header.subHeading}</h3>
      </div>
      <button>Xem ưu đãi</button>
    </div>
  );
}

export default SliderHeader;
