import React, { Fragment } from "react";
import classes from "./login.module.css";
import Logo from "../../components/logo/Logo";
import Github from "../../components/logo/Git";
import Wave from "../../components/background/wave";
import Paws from "../../components/background/paws";
import Cat from "../../components/background/cat";
import LoginForm from "../../components/form/login/loginForm";

const Login = () => {
  return (
    <Fragment>
      <div className={classes.pageWrapper}>
        <div className={classes.wave}>
          <Wave />
        </div>
        <div className={classes.logo}>
          <Logo />
        </div>
        <div className={classes.github}>
          <Github />
        </div>
        <div className={classes.loginForm}>
          <LoginForm />
        </div>
        <div className={classes.cat}>
          <Cat />
        </div>
        <div className={classes.paws}>
          <Paws />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
