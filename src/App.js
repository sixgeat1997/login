import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch} from "react-router-dom";
import Home from './components/Home'
import Welcome from './components/Welcome'

function App() {

  return (
    <>
      
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/welcome" component={Welcome} />
          <Route path="login" />
          <Route path="register" />
          <Route component={Home} />
        </Switch>
     

    </>
  );
}

export default App;
