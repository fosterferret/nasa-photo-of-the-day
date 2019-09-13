import React from "react";
import ShowMedia from "./ShowMedia";
import Description from "./Description";
import styled from 'styled-components';

const StyledInput = styled.input`
  appearance: none;
  color: white;
  box-sizing: border-box;
  border: 1px solid white;
  background: transparent;
  font-size: 1.8rem;
  padding: 8px;
  width: 230px;
  ::-webkit-datetime-edit-text { padding: 0 2rem; }
  ::-webkit-datetime-edit-month-field { text-transform: uppercase; }
  ::-webkit-datetime-edit-day-field { text-transform: uppercase; }
  ::-webkit-datetime-edit-year-field { text-transform: uppercase; }
  ::-webkit-inner-spin-button { display: none; }
  ::-webkit-calendar-picker-indicator { background: transparent;}
`

function MediaContainer({ setDate, title, description, mediaURL, mediaType }) {
  return (
    <div className="content-container">
      <div className="input-container">
          <p>Pick a day!</p>
        <StyledInput onChange={e => setDate(e.target.value)} type={"date"} ></StyledInput>
      </div>
      <ShowMedia mediaType={mediaType} mediaURL={mediaURL} />
      <Description title={title} description={description} />
    </div>
  );
}

export default MediaContainer;
