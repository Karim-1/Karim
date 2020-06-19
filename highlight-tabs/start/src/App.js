import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
              <link to="/">Home</link>
            </Tab>
            <Tab>
              <link to="/About">About</link>
            </Tab>
            <Tab>
              <link to="/Features">Features</link>
            </Tab>
          </div>

          <div className="viewport">
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Features">
              <Features />
            </Route>
            <Route path="" exact={true}>
              <Home />
            </Route>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
