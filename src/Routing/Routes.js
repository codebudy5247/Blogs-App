import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
import Home from "../Components/Home"


const Routes = () => {
  return (
    <section className="container">
    
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/posts" component={Home} />
       

       
      </Switch>
    </section>
  );
};

export default Routes;
