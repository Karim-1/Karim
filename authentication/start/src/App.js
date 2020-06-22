import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "./App.css";
import { Auth0Context } from "./contexts/auth0-context";

import createAuth0Client from "@auth0/auth0-spa-js";

export default function App() {
  const auth0 = useContext(Auth0Context);
  console.log(auth0);
  return (
    <Router>
      <div className="app">
        {/* site header */}
        <SiteHeader />

        {/* routes */}
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
