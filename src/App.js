import React from "react";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./View/Home/Home";
import Login from "./View/Auth/Login";
import SignUp from "./View/Auth/SignUp";
import Container from "@material-ui/core/Container";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./Services/Auth";
import  PrivateRoute  from "./Services/PrivateRoute";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Container className="App">
          <Toolbar></Toolbar>
          <PrivateRoute exact path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
