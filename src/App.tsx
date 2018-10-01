import * as React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import About from "./about/about.component";
import Footer from "./footer/footer.component";
import Header from "./header/header.component";
import Home from "./home/home.component";
import Login from "./login/login.component";
import Register from "./register/register.component";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <HashRouter>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" exact={true} component={About} />
            <Route path="/register" exact={true} component={Register} />
            <Route path="/login" exact={true} component={Login} />
          </Switch>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
