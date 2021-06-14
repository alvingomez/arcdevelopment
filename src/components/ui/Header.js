import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
    const { children} = props;
   
    const trigger = useScrollTrigger({ //A material-UI hook. An vevent listener when the user is scrolling
      disableHysteresis: true,
      threshold: 0, //defaults ot 100. The number controls how far the user has to start scrolling 
                    //before it triggers this event listener      
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0, //4 is the floating state and 0 flat
    });
  } 
  
 // This will provide "themes" inside of our styles 
  const useStyles = makeStyles((theme) => ({
   toolbarMargin:{
     //Using the spread operator we have copied the "styles" over to apply to a component
     ...theme.mixins.toolbar,
     //Added a little extra margin bottom of 3 to offeset to offset the height that was 
     //added with the responsive units that added units in logo 
     marginBottom: "3em"     
   },
   logo:{ 
     height:"7em"
   }
 }))
 
function Header({props}) {    
    const classes = useStyles() 
     
    return (
      <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed">            
              <Toolbar disableGutters> 
              <img alt="company logo" src={logo} className={classes.logo} />
              </Toolbar>                       
        </AppBar>
        </ElevationScroll>   
        <div className={classes.toolbarMargin} /> 
      </React.Fragment>    
    );
}
export default Header
