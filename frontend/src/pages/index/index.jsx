import React, { Fragment } from "react";
import classes from "./index.module.css";
import Navbar from "../../layouts/navbar/navbar";
//import Header from "../../layouts/header/header";
import UpperWave from "../../components/background/upperWave";
import ServiceGrid from "../../components/utils/serviceGrid/serviceGrid";

const index = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <Navbar className={classes.navbar} />
        <UpperWave className={classes.header} />
        <div class={classes.overlay}>
          <video src="./assets/MP4/vet-play.mp4" autoPlay loop muted />
        </div>
        <div className={classes.text}>
          <h2>Virtual Vet</h2>
          <h3>Your clinic's virtual space</h3>
          <p>For managing your business - anywhere, anytime!</p>
        </div>
        <ServiceGrid />
        <div className={classes.buttons}></div>
      </div>
    </Fragment>
  );
};

export default index;
