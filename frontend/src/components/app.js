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
import CreateActivityContainer from "./activities/create_activity_container";


const App = () => (
    <div>
        {/* <NavBarContainer /> */}
        <Switch>
            {/* this is for testing activity show components */}
            <Route exact path="/activityshow" component={ActivityContainer} />


            <AuthRoute exact path="/" component={SplashPage} /> {/* Change to AuthRoute */}
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/profile" component={ProfileForm} />
            <ProtectedRoute exact path="/" component={ProfileForm} />
            <ProtectedRoute path ="/profile/edit" component={EditProfilePage} />
            <ProtectedRoute exact path="/dashboard" component={DashBoard} /> 
            <ProtectedRoute exact path="/activities/host" component={CreateActivityContainer} /> 
        </Switch>
    </div>
)

export default App