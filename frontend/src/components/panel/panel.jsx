import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import classes from "./panel.module.scss";

function PanelTab(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

PanelTab.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function FloatingActionButtonZoom() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.container}>
      <Box
        sx={{
          bgcolor: "background.paper",
          width: 500,
          position: "relative",
          minHeight: 200,
        }}
      >
        <AppBar
          position="static"
          color="default"
          className={classes.navbar}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="none"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
            className={classes.tabs}
          >
            <Tab label="Acasa" {...a11yProps(0)} />
            <Tab label="Contoare" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <PanelTab value={value} index={0} dir={theme.direction}></PanelTab>
        <PanelTab value={value} index={1} dir={theme.direction}></PanelTab>
      </Box>
    </div>
  );
}
