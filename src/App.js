import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Routes
import Header from "./Components/Navbar/Header";
import Landing from "./Components/Layout/Landing";
import Routes from "./Routing/Routes";
import Footer from "./Components/Footer/Footer"

import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <input type="checkbox" id="theme" />
        
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>
          
          
       
      </Fragment>
      <Footer />
    </Router>
  );
};

export default App;
