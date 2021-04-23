import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles.scss";

function App() {

  const logout = () => {
    window.localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#">
            <Link onClick={logout} to="/login">logout
            </Link>
          </a>
        </header> 
        <Switch>

        <PrivateRoute path="/bubbles/:id" component={BubblePage}>
          <BubblePage/>
        </PrivateRoute>

        <PrivateRoute path="/bubbles" component={BubblePage}>
          <BubblePage/>
        </PrivateRoute>


        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/">
          <Login/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.