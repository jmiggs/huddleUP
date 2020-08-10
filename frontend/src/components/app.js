import React from "react"; 
import { Switch, Route } from "react-router-dom"; 

import SplashPage from "./splash/splash_page"; 
import LoginFormContainer from "./auth/login_form_container";
import SignupFormContainer from "./auth/signup_form_container";
// import NavBarContainer from "./navbar/navbar_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ProfilePageContainer from "./profile/profile_page_container";
// import EditProfilePage from "./profile/edit_profile_page";

import DashBoardContainer from './dashboard/dashboard_container';
import ActivityContainer from './activity/activity_container'
import CreateActivityContainer from "./activities/create_activity_container";
import EditActivityContainer from "./activities/edit_activity_container";
import EditProfilePageContainer from "./profile/edit_profile_page_container";
import MyEventsContianer from './my_events/my_events_container';

import SearchContainerBball from "./search/search_container_bball";
import SearchContainerFootball from "./search/search_container_football";
import SearchContainerSoccer from "./search/search_container_soccer";
import SearchContainerGolf from "./search/search_container_golf";
import SearchContainerTennis from "./search/search_container_tennis";




const App = () => (
    <div>
        {/* <NavBarContainer /> */}
        <Switch>

            {/* this is for testing  */}
 
            <AuthRoute exact path="/" component={SplashPage} /> {/* Change to AuthRoute */}
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/users/:id" component={ProfilePageContainer} />
            <ProtectedRoute path ="/users/:id/edit" component={EditProfilePageContainer} />
            <ProtectedRoute path ="/users/:id/myevents" component={MyEventsContianer} />
            <ProtectedRoute exact path="/dashboard" component={DashBoardContainer} /> 
            <ProtectedRoute exact path="/activity/host" component={CreateActivityContainer} />
            <ProtectedRoute path="/activity/:id/edit" component={EditActivityContainer} />
            <ProtectedRoute path="/activity/:id" component={ActivityContainer} />
            <ProtectedRoute exact path="/basketball" component={SearchContainerBball} /> 
            <ProtectedRoute exact path="/soccer" component={SearchContainerSoccer} /> 
            <ProtectedRoute exact path="/golf" component={SearchContainerGolf} /> 
            <ProtectedRoute exact path="/football" component={SearchContainerFootball} /> 
            <ProtectedRoute exact path="/tennis" component={SearchContainerTennis} /> 
            <Route path="*" component={SplashPage} />
        </Switch>
        
    </div>
)

export default App