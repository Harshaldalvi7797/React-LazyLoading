import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/nav";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <switch>
          <Route path="/home" exact component={Home} />
        </switch>
      </React.Fragment>
    );
  }
}

export default App;
