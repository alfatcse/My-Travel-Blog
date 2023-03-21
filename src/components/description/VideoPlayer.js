import React from "react";

const VideoPlayer = ({link,title}) => {
  return (
    <iframe
      width="100%"
      class="aspect-video"
      src={link}
      title={title}
      frameBorder=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullscreen
    ></iframe>
  );
};

export default VideoPlayer;
