import React from "react";
import styled from "styled-components";

const StyledDescription = styled.div`
  p {
    font-size: 2rem;
    line-height: 1.5;
    padding-bottom: 10px;
  }
`;

function Description({ title, description }) {
  return (
    <StyledDescription className="desc-container">
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledDescription>
  );
}

export default Description;
