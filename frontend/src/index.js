import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root";
import configureStore from './store/store';
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => { 
  let reduxStore;

  if (localStorage.jwtToken) { 
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser }};
    reduxStore = configureStore(preloadedState);
    
    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) { 
      reduxStore.dispatch(logout());
      window.location.href = "/#/";
    }
  } else { 
    reduxStore = configureStore({});
  }

  const root = document.getElementById("root") 
  ReactDOM.render(<Root store={reduxStore} />, root)
  window.reduxStore = reduxStore;
  window.getState = reduxStore.getState;
});
