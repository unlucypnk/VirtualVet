import React, { Fragment } from "react";
import classes from "./index.module.css";
import Navbar from "../../layouts/navbar/navbar";
import Header from "../../layouts/header/header";

const index = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <Navbar className={classes.navbar} />
        <Header className={classes.header} />
        <div class={classes.overlay}>
          <video src="./assets/MP4/vet-play.mp4" autoPlay loop muted />
        </div>
        <div className={classes.text}>
          <h2>Virtual Vet</h2>
          <h3>Your clinic's virtual space</h3>
          <p>
            Clients, inventory and appointments management system - anywhere,
            anytime!
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
