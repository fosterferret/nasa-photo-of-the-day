import React from "react";

function Description({ title, description }) {
  return (
    <div className="desc-container">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Description;
