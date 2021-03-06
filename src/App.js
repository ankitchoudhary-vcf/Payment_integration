import "./App.css";
import "bulma/css/bulma.min.css";
import Donate from "./Components/Donate";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
import { HashRouter, Switch, Route } from "react-router-dom";
import { About } from "./Components/About";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/donate">
            <Donate />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
