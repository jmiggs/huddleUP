import React from "react"; 
import { Switch, Route } from "react-router-dom"; 
import SplashPage from "./splash/splash_page"; 
import SessionForm from "./auth/session_form";
import NavBar from "./navbar/navbar";

const App = () => (
    <div>
        {/* <NavBar /> */}
        <Switch>
            <Route exact path="/" component={SplashPage} />
            <Route exact path="/login" component={SessionForm} />
            <Route exact path="/signup" component={SessionForm} />
        </Switch>
    </div>
)

export default App