import React, { Fragment } from "react";
import { Box } from "@mui/system";

const Logo = () => {
  return (
    <Fragment>
      <Box
        component="img"
        sx={{
          height: 267,
          width: 350,
          maxHeight: { xs: 333, md: 267 },
          maxWidth: { xs: 450, md: 350 },
        }}
        alt="A cat's paw."
        src="./assets/SVG/logo2.svg"
      />
    </Fragment>
  );
};

export default Logo;
