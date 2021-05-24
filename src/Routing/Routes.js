import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../Components/Auth/Register";
import Login from "../Components/Auth/Login";
import PrivateRouter from "./PrivateRoute"
import Home from "../Components/Home"
import EditScreen from "../Components/EditPost"
import Footer from "../Components/Footer/Footer"


const Routes = () => {
  return (
    <section className="container">
    
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRouter exact path="/posts" component={Home} />
        <Route path='/post/:id/edit' component={EditScreen} />

       
      </Switch>
      
    </section>
   
  );
};

export default Routes;
