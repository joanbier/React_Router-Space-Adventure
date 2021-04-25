import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Page from "./Page";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header>{<Header />}</header>
          <Nav />
          <main>{<Page />}</main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
