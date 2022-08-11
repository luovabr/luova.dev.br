import React from "react";

import Preview from "../views/Preview";

import LuovaDevBr from "../views/LuovaDevBr";

import NotFound from "../views/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />

        <Switch>
          <Route exact path="/" component={LuovaDevBr} />

          <Route path="/default" component={Preview} />
          
          <Route component={NotFound} />
        </Switch>

      </Router>
    </>
  );
};

export default Routes;
