import React from "react";
import ReactPlayer from "react-player";

function ShowMedia({ mediaType, mediaURL }) {
  return mediaType === "video" ? (
    <ReactPlayer
      url={mediaURL}
      width="80%"
      height="60vh"
      alt="NASA"
      controls="true"
    />
  ) : (
    <div class="image-container">
      <img src={mediaURL} alt="NASA" width="40%" height="5%" />
    </div>
  );
}

export default ShowMedia;
