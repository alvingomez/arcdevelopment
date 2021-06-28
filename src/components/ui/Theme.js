import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9"
const arcOrange ="#FFBA60"

//Creates an instance of the default MUI and then essentially
//tells is that I want to overwrite any of the default values
//with the object that I am going to pass witin it. 
export default createMuiTheme({
    palette:{
        common:{
            blue:`${arcBlue}`,
            orange:`${arcOrange}`
        },
        primary:{
            main:`${arcBlue}`
        },
        secondary:{
            main:`${arcOrange}`
        }
    }, 
    typography: {
        tab:{
            fontFamily:"Raleway",
            //To disable the uppercasing due to the styling of the button component 
            //being used underneath the tab component. 
            textTransform:"none", 
            fontWeight:700,
            fontSize:"1rem"
        },
        estimate:{
            fontFamily: "Roboto",
            fontSize: "15px",
            textTransform: "none",
            color:"white"
        }, 
    }
})