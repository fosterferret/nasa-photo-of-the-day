import React from "react";
import ShowMedia from "./ShowMedia";
import Description from "./Description";
import styled from 'styled-components';

function MediaContainer({ setDate, title, description, mediaURL, mediaType }) {
  return (
    <div className="content-container">
      <div className="input-container">
        <input onChange={e => setDate(e.target.value)} type={"date"}></input>
      </div>
      <ShowMedia mediaType={mediaType} mediaURL={mediaURL} />
      <Description title={title} description={description} />
    </div>
  );
}

export default MediaContainer;
