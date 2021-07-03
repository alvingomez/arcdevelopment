import Header from "../components/ui/Header";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      /** 
      The BrowserRouter component simply handles the functionality necessary 
      for providing the browser with the correct URL for each page navigated
      to as well as manipulating the history object and enabling navigation via 
      the Forward and backward buttons in the browser
      */
      <Router>
        <Header />        
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>}></Route>
          <Route
            exact
            path="/services"
            component={() => <div>Services</div>}
          ></Route>
          <Route
            exact
            path="/customsoftware"
            component={() => <div>Custom Software</div>}
          ></Route>
          <Route
            exact
            path="/mobileapps"
            component={() => <div>Mobile Apps</div>}
          ></Route>
          <Route
            exact
            path="/websites"
            component={() => <div>Websites</div>}
          ></Route>
          <Route
            exact
            path="/revolution"
            component={() => <div>The Revolution</div>}
          ></Route>
          <Route
            exact
            path="/about"
            component={() => <div>About us</div>}
          ></Route>
          <Route
            exact
            path="/contact"
            component={() => <div>Contact</div>}
          ></Route>
          <Route
            exact
            path="/estimate"
            component={() => <div>Estimate</div>}
          ></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
