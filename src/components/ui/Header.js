import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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
  
 
function Header() {    
    return (
        <ElevationScroll>
        <AppBar>
            <Toolbar>Arc Development</Toolbar>
        </AppBar>
        </ElevationScroll>       
    )
}
export default Header
