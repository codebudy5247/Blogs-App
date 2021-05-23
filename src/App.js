import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Routes
import Header from "./Components/Navbar/Header";
import Landing from "./Components/Layout/Landing";
import Routes from "./Routing/Routes";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <input type="checkbox" id="theme" />
        <div className="App">
          <div className="main">
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={Routes} />
            </Switch>
          </div>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
