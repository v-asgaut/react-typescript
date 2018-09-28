import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./footer/footer.component";
import Header from "./header/header.component";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
