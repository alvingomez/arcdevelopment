import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


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

    useEffect(() => {
    /**The window.location object can be used to get the current page address(URL)
     * and redirect the browser to a new page. 
     * (window.location.pathname) returns the path and filename of the current page
     */
    if(window.location.pathname === "/" && value !==0){
     setValue(0);
    }else if(window.location.pathname === "/services" && value !==1){
     setValue(1);
    }else if(window.location.pathname === "/revolution" && value !==2){
      setValue(2)
    }else if(window.location.pathname === "/about" && value !==3){
      setValue(3);
    }else if(window.location.pathname === "/contact" && value !==4){
      setValue(4);
    }else if (window.location.pathname === "/estimate" && value !==5){
      setValue(5)
    }
    /*if the state "value" has not changed then I don't want to run this code */
  }, [value]);


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
              <Tab className={classes.tab} component={Link} to="/" label="Home" />
              <Tab className={classes.tab} component={Link} to="/services" label="Services" />
              <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
              <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
              <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
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
