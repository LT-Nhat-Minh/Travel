import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

CardScripts.propTypes = {};

function CardScripts(props) {
  const scripts = props.scripts;
  return (
    <div className="CardScripts">
      <div className="cardTitle">
        <h5>{scripts[0][0]}</h5>
        <h3>{scripts[0][1]}</h3>
      </div>
      <div>
        <span class="rateNumber">{scripts[1][0]}</span>
        <span> {scripts[1][1]}</span>
        <p className="feedback">{scripts[1][2]}</p>
      </div>
      <div className="cardPrice">
        <span>{scripts[2][0]}&#8363; </span>
        <span>
          <del>{scripts[2][1]} &#8363;</del>
        </span>
      </div>
      <div className="cardTag">
        <span class="material-symbols-outlined">sell</span>
        Giảm giá thành viên
      </div>
    </div>
  );
}

export default CardScripts;
