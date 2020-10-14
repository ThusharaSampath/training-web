import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter,Route } from "react-router-dom";
import {Home} from "./view/Home";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Navbar></Navbar>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/signup" component={SignUp}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
