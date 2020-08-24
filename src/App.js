import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux"

import Home from "./pages/Home" 

function App(props) {

  
  const counter = useSelector(state => state.counterReducer)

  console.log(props)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1> Counter {counter} </h1>
      <Home></Home>
    </div>
  );
}

export default App;
