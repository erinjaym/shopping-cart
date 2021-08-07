import React from "react";
import "./index.css";
import Nav from "./Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Shop from "./Shop"; 
import Footer from "./Footer";

function App() {

  return (
    <BrowserRouter>
    <div id="mainpage">
      <Nav />
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Shop" component={Shop} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
