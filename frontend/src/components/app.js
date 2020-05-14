import React from "react"; 
import { Switch, Route } from "react-router-dom"; 
import SplashPage from "./splash/splash_page"; 
import LoginFormContainer from "./auth/login_form_container";
import SignupFormContainer from "./auth/signup_form_container";
import NavBarContainer from "./navbar/navbar_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ProfilePageContainer from "./profile/profile_page_container";
import EditProfilePage from "./profile/edit_profile_page";

import SearchContainer from "./search/search_container";
import DashBoardContainer from './dashboard/dashboard_container';
import ActivityContainer from './activity/activity_container'
import CreateActivityContainer from "./activities/create_activity_container";
import EditProfilePageContainer from "./profile/edit_profile_page_container";




const App = () => (
    <div>
        {/* <NavBarContainer /> */}
        <Switch>

            {/* this is for testing  */}
            <Route exact path="/maptest" component={SearchContainer} />
 
            <AuthRoute exact path="/" component={SplashPage} /> {/* Change to AuthRoute */}
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/profile" component={ProfilePageContainer} />
            <ProtectedRoute exact path="/" component={ProfilePageContainer} />
            <ProtectedRoute path ="/profile/edit" component={EditProfilePage} />
            <ProtectedRoute exact path="/dashboard" component={DashBoardContainer} /> 
            <ProtectedRoute path="/activity/:id" component={ActivityContainer} />
            {/* <ProtectedRoute path="/sport/:sport" component={SportContainer} /> */}
            <ProtectedRoute exact path="/activities/host" component={CreateActivityContainer} /> 


        </Switch>
        
    </div>
)

export default App