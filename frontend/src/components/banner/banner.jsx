import React, { Fragment } from "react";
import { Button } from "@mui/material";
import classes from "./banner.module.css";

const Banner = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <section className={classes.summary}>
          <h2>The one app to manage your Vet Clinic !</h2>
          <p>
            Clients, Medical history, Appointments, Inventory, and so much more
            !
          </p>
          <Button variant="outline" className={classes.button} href="/">
            Explore
          </Button>
        </section>
      </div>
    </Fragment>
  );
};

export default Banner;
