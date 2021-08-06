import React from "react";
import App from "./App";
import Shop from "./Shop";
import Cart from "./Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path= "/Home" component={App} />
                <Route exact path= "/Shop" component={Shop} />
                <Route exact path= "/Cart" component={Cart} />
            </Switch>
        </BrowserRouter> 
    );
};

export default Routes;