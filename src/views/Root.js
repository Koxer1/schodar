import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainTemplate from '../templates/MainTemplate';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';


const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/home"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/projects"} component={Projects} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;