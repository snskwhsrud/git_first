import React, { Component } from "react";
import "./App.css";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        World wide web!
      </header>
    );
  }
}

class Toc extends Component {
  render() {
    return (
      <ul>
        <li>
          <a href="1.html">HTML</a>
        </li>
        <li>
          <a href="1.htm2">CSS</a>
        </li>
        <li>
          <a href="1.htm3">JavaScript</a>
        </li>
      </ul>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <Toc></Toc>
      </div>
    );
  }
}

export default App;
