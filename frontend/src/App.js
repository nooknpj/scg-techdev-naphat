import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { FindXYZ, FindBC, Direction, MyCV } from "./components/body";
import "./components/styles.css";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="body">
          <Switch>
            <Route path="/" exact component={MyCV} />
            <Route path="/findXYZ" exact component={FindXYZ} />
            <Route path="/findBC" component={FindBC} />
            <Route path="/direction" component={Direction} />
            <Route path="/myCV" component={MyCV} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
