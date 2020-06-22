import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

import "./App.css";
import Tab from "./components/Tab";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <div className="tabs">
            <Tab>
              <NavLink activeClassName="is-active" to="/" exact="true">
                Home
              </NavLink>
            </Tab>
            <Tab>
              <NavLink activeClassName="is-active" to="/About">
                About
              </NavLink>
            </Tab>
            <Tab>
              <NavLink activeClassName="is-active" to="/Features">
                Features
              </NavLink>
            </Tab>
          </div>

          <div className="viewport">
            <Switch>
              <Route path="/About">
                <About />
              </Route>
              <Route path="/Features">
                <Features />
              </Route>
              <Route path="/" exact={true}>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
