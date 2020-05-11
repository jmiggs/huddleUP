import React from "react"; 
import { Switch, Route } from "react-router-dom"; 
import SplashPage from "./splash/splash_page"; 
import NavBar from "./navbar/navbar";

const App = () => (
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/" component={SplashPage} />
        </Switch>
    </div>
)

export default App