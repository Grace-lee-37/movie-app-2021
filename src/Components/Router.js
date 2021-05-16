import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Header from "./Header";

export default () => (
    <Router>
        <Switch>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/Search" component={Search} />
        <Route path="/TV" component={TV} />
            
        </Switch>
    
    </Router>
);