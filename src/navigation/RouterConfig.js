import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/HomeContainer";
import Header from "../components/Header/HeaderComponent";
import { ROOT, HEADER } from "./CONSTANTS";

export const RouterConfig = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ROOT} component={Home} />
        <Route exact path={HEADER} component={Header} />
      </Switch>
    </div>
  );
};
