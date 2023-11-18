import React from "react";
import classes from "./index.module.css";
import Navbar from "../../layouts/navbar/navbar";
import Header from "../../layouts/header/header";
//import Banner from "../../components/banner/banner";

const index = () => {
  return (
    <div className={classes.container}>
      <Navbar className={classes.navbar} />
      <Header className={classes.header} />
    </div>
  );
};

export default index;
