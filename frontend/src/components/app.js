import React from "react"; 
import { Switch, Route } from "react-router-dom"; 
import SplashPage from "./splash/splash_page"; 
import LoginFormContainer from "./auth/login_form_container";
import SignupFormContainer from "./auth/signup_form_container";
import NavBarContainer from "./navbar/navbar_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ProfilePageContainer from "./profile/profile_page_container";
import EditProfilePage from "./profile/edit_profile_page";
import DashBoard from './dashboard/dashboard';
import Map from './map/map'




// const API_KEY =`${process.env.REACT_APP_APIMAPS_KEY}`
// console.log("test", API_KEY )

const App = () => (
    <div>
        {/* <NavBarContainer /> */}
        <Switch>
            {/* this is for testing  */}
            <Route exact path="/maptest" component={Map} />


            <AuthRoute exact path="/" component={SplashPage} /> {/* Change to AuthRoute */}
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            {/* <ProtectedRoute exact path="/profile" component={ProfileForm} /> */}
            {/* <ProtectedRoute exact path="/" component={ProfileForm} /> */}
            <ProtectedRoute path ="/profile/edit" component={EditProfilePage} />
            <ProtectedRoute exact path="/dashboard" component={DashBoard} /> 
        </Switch>
    </div>
)

export default App