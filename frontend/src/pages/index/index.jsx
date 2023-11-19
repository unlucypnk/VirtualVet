import React from "react";
import classes from "./index.module.css";
import Navbar from "../../layouts/navbar/navbar";
import Header from "../../layouts/header/header";
import VetVideo from "../../components/background/vetVideo/vetVideo";
//import Footer from "../../layouts/footer/footer";

const index = () => {
  return (
    <div className={classes.container}>
      <Navbar className={classes.navbar} />
      <Header className={classes.header} />
      <VetVideo className={classes.bgVetVideo} />
    </div>
  );
};

export default index;
