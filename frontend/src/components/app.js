import React from "react"; 
import { Switch, Route } from "react-router-dom"; 
import SplashPage from "./splash/splash_page"; 
import SessionForm from "./auth/session_form";
import ProfileForm from "./profile/profile_page";
import EditProfilePage from "./profile/edit_profile_page";
// import NavBar from "./navbar/navbar";

const App = () => (
    <div>
        {/* <Route path = "/" component = {NavBar}/> */}
        <Switch>
            <Route exact path="/" component={SplashPage} />
            <Route exact path="/login" component={SessionForm} />
            <Route exact path="/signup" component={SessionForm} />
            <Route exact path="/profile" component={ProfileForm} />
            <Route path ="/profile/edit" component={EditProfilePage} />
        </Switch>
    </div>
)

export default App