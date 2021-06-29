import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    //A material-UI hook. An vevent listener when the user is scrolling
    disableHysteresis: true,
    threshold: 0, //defaults ot 100. The number controls how far the user has to start scrolling
    //before it triggers this event listener
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0, //4 is the floating state and 0 flat
  });
}

// This will provide "themes" inside of our styles
// Inline style
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    //Using the spread operator we have copied the "styles" over to apply to a component
    ...theme.mixins.toolbar,
    //Added a little extra margin bottom of 3 to offeset to offset the height that was
    //added with the responsive units that added units in logo
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    //Spacing between the tabs
    minWidth: 10,
    //Tabs to be push all the way to the right
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));

function Header({ props }) {
  //This JSS is compiled into actual CSS.
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img alt="company logo" src={logo} className={classes.logo} />
            <Tabs
              value={value}
              className={classes.tabContainer}
              onChange={handleChange}
              indicatorColor="primary"
            >
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="Contact Us" />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
export default Header;
