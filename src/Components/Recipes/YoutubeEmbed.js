
import React from "react";

export default function YoutubeEmbed(props) {
	const { url } = props; 
	return (
  <div>
    <iframe
      src={url}
	  width="100%"
	  height="500px"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="video"
    />
    {" "}
  </div>
	);
  }