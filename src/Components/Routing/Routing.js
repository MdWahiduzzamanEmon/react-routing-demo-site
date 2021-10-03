import React from 'react';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Home from "../../Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "../../Components/Error/Error";
import Details from "../../Components/Details/Details";
import Chart from "../../Components/Chart/Chart";
import About from '../../Components/About/About';
const Routing = () => {
    return (
      <div>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/charts">
              <Chart></Chart>
            </Route>
            <Route path="/details/:ToId">
              <Details></Details>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    );
};

export default Routing;