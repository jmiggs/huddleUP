import React from "react"; 
import { Switch, Route } from "react-router-dom"; 
import SplashPage from "./splash/splash_page"; 
import LoginFormContainer from "./auth/login_form_container";
import SignupFormContainer from "./auth/signup_form_container";
import NavBarContainer from "./navbar/navbar_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ProfilePageContainer from "./profile/profile_page_container";
import EditProfilePageContainer from "./profile/edit_profile_page_container";
import DashBoard from './dashboard/dashboard';
import ActivityContainer from './activity/activity_container'

const App = () => (
    <div>
        {/* <NavBarContainer /> */}
        <Switch>
            {/* this is for testing activity show components */}
            <Route exact path="/activityshow" component={ActivityContainer} />


            <AuthRoute exact path="/" component={SplashPage} /> {/* Change to AuthRoute */}
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/users/:id" component={ProfilePageContainer} />
            <ProtectedRoute path ="/users/:id/edit" component={EditProfilePageContainer} />
            <ProtectedRoute exact path="/dashboard" component={DashBoard} /> 
        </Switch>
    </div>
)

export default App