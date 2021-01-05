import React, { useState } from "react";
import { Link } from "react-router-dom";
import EventsDropdown from './events_dropdown';
import "../../reset.css";
import "./navbar.css"

const NavBar = props => {
    const [slide, setSlide] = useState(false);

    // I'm going to make this responsive

    // const logoutUser = e => {
    //     e.preventDefault();
    //     props.logout();
    // };

    // getLinks() { // I like how they abstracted this away from the render. I'm going to do this from now on.
    //     if (this.props.loggedIn) { 
    //         return ( 
    //             <div>
    //                 <Link to="/">Explore</Link>
    //                 <Link to="/">Profile</Link>
    //                 <Link to="/">Host</Link>
    //                 <button onClick={this.logoutUser}>Logout</button>
    //             </div>
    //         )
    //     } else { 
    //         return (
    //             <div>
    //                 <Link to="/">Explore</Link>
    //                 <Link to="/login">Log In</Link>
    //                 <Link to="/signup">Sign Up</Link>
    //             </div>
    //         )
    //     }
    // }

    const slideIn = () => {
        setSlide(!slide);
    };

    const huddleUpTab = () => (
        <Link to="/" className="navbar-name">
            huddleUP
        </Link>
    );

    const myEventsTab = () => (
        <Link to={`/users/${props.id}/myevents`} className="navbar-explore-link">
            My Events
        </Link>
    );

    const exploreTab = () => (
        <Link to="/" className="navbar-explore-link">
            Explore
        </Link>
    );

    const hostTab = () => (
        <Link to="/activity/host" className="navbar-host-link">
            Host
        </Link>
    );

    const profileTab = () => (
        <Link to={`/users/${props.id}`} className="navbar-profile-link">
            Profile
        </Link>
    );

    return (
        <div className="navbar">
            <div className="left-navbar">
                {huddleUpTab()}
            </div>
            <div className="right-navbar">
                {
                slide ?
                    <div className="navbar-links slide">
                        {myEventsTab()}
                        {exploreTab()}
                        {hostTab()}
                        {profileTab()}
                    </div> :
                    <div className="navbar-links">
                        {myEventsTab()}
                        {exploreTab()}
                        {hostTab()}
                        {profileTab()}
                    </div>
                }
                {
                slide ?
                    <div className="burger cross" onClick={slideIn}>
                        <div className="burger-line-1"></div>
                        <div className="burger-line-2"></div>
                        <div className="burger-line-3"></div>
                    </div>
                    :
                    <div className="burger" onClick={slideIn}>
                        <div className="burger-line-1"></div>
                        <div className="burger-line-2"></div>
                        <div className="burger-line-3"></div>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar;