import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import GoogleApiWrapper from './components/Browser'
import Restaurants from './components/Restaurants'
import Footer from './components/Footer'
import Logo from './components/Logo'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Logo />
      <Switch>
        <Navigation isLoaded={isLoaded} path="/" exact />
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/browser">
          <GoogleApiWrapper />
        </Route>
        <Route path="/restaurants">
          <Restaurants />
        </Route>
      </Switch>

      {/* <Footer /> */}
    </>
  );
}

export default App;
