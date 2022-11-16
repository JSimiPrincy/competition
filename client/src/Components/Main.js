import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home/Home";
import Login from "./Login/Login";
import Products from "./Products/Products";
import About from "./About/About";
import Contact from './Contact/Contact';

const Main = () => (
  <div>
    <Switch>
      <Route path='/Home' component={Home} />
      <Route path='/Login' component={Login} />
      <Route path='/Products' component={Products} />
      <Route path='/About' component={About} />
      <Route path='/Contact' component={Contact} />
    </Switch>
  </div>
)

export default Main;