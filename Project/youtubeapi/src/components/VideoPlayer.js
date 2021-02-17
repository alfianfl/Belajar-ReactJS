import React from "react";

const Videoplayer = (props) => {
  if (!props.videoId) {
    return (
      <p className="mt-5" style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
    );
  }else{
      return (
        <div className=" mt-5 mb-5 p-3 video-player">
          <iframe
            title={props.videoId}
            className="video-iframe"
            src={`https://www.youtube.com/embed/${props.videoId}`}
          />
          <h5>{props.title}</h5>
          <p>{props.channel}</p>
        </div>
      );
  }
};

export default Videoplayer;