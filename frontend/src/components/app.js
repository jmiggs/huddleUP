import React from "react"; 
import { Switch, Route } from "react-router-dom"; 
import SplashPage from "./splash/splash_page"; 
import LoginFormContainer from "./auth/login_form_container";
import SignupFormContainer from "./auth/signup_form_container";
import NavBarContainer from "./navbar/navbar_container";
import { AuthRoute, ProtectRoute } from "../util/route_util";
import ProfileForm from "./profile/profile_page";
import EditProfilePage from "./profile/edit_profile_page";

const App = () => (
    <div>
        {/* <NavBarContainer /> */}
        <Switch>
            <Route exact path="/" component={SplashPage} /> {/* Change to AuthRoute */}
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/profile" component={ProfileForm} />
            <Route path ="/profile/edit" component={EditProfilePage} />
        </Switch>
    </div>
)

export default App