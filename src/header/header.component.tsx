import * as React from "react";
import "../App.css";
import logo from "../logo.svg";

class Header extends React.Component {
  public render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand">
            <img src={logo} className="App-logo" alt="logo" />
          </a>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
