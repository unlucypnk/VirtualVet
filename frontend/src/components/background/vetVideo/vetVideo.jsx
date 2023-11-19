import React, { Fragment } from "react";
import classes from "./vetVideo.module.css";

const VetVideo = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div class={classes.overlay}>
          <video src="./assets/MP4/vet-play.mp4" autoPlay loop muted />
        </div>
      </div>
    </Fragment>
  );
};

export default VetVideo;
