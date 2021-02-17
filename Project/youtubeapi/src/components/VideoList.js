import React from "react";
import "../styles/_video.css";


function getCss(imageurl) {
  const _styles = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "180px",
    position: "relative"
  };
  return _styles;
}

function selectVideo(videoId, videoTitle, onVideoSelected){
  onVideoSelected(videoId,videoTitle)
}

function constructVideoTitles(videosData, onVideoSelected) {
  return videosData.map(({id,snippet}, index) => {
    return (
      <div
        className="video"
        key={index}
        onClick={() => selectVideo(id.videoId, snippet.title, onVideoSelected)}>
        <div style={getCss(snippet.thumbnails.high.url)} key={index} />
        <p className="title">{snippet.title} {console.log(id)}</p>
      </div>
    );
  });
}
const VideoList = (props) => {
  return (
    <div className="video-list">
      <div style={{ padding: "20px 0" }}>
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
          Videos List
        </h3>
        {constructVideoTitles(props.data, props.onVideoSelected)}
      </div>
    </div>
  );
};

export default VideoList;