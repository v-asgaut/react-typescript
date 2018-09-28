import * as React from "react";
import "../App.css";

class Footer extends React.Component {
  public render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom">
        <h3 className="copyright">&copy;</h3>
      </nav>
    );
  }
}

export default Footer;
