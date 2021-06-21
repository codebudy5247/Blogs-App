import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Routes
import Alert from "./Components/Alert/Alert"
import Header from "./Components/Navbar/Header";
import Landing from "./Components/Layout/Landing";
import Routes from "./Routing/Routes";
import Footer from "./Components/Footer/Footer"

import "./App.css";

const App = () => {
  return (
    <Router>
    <Alert />
      <Fragment>
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
