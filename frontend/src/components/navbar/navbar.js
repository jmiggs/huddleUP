import React from "react"; 
import { Link } from "react-router-dom";
import EventsDropdown from './events_dropdown';
import "../../reset.css";
import "./navbar.css"

class NavBar extends React.Component { 
    constructor(props) { 
        super(props)

        this.logoutUser = this.logoutUser.bind(this);
        // this.getLinks = this.getLinks.bind(this);
        this.huddleUpTab = this.huddleUpTab.bind(this);
        this.myEventsTab = this.myEventsTab.bind(this);
        this.exploreTab = this.exploreTab.bind(this);
        this.hostTab = this.hostTab.bind(this); 
        this.profileTab = this.profileTab.bind(this);
    }

    logoutUser(e) { 
        e.preventDefault();
        this.props.logout();
    }

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

    huddleUpTab() {
        return (
            <Link to="/" className="navbar-name">
                huddleUP
            </Link>
        )
    }

    myEventsTab() { 
        return (
            <Link to={`/users/${this.props.id}/myevents`} className="navbar-explore-link">
                My Events
            </Link>
        )
    }

    exploreTab() { 
        return (
            <Link to="/" className="navbar-explore-link"> 
                Explore 
            </Link>
        )
    }

    hostTab() { 
        return (
            <Link to="/activity/host" className="navbar-host-link">
                Host
            </Link> 
        )
    }

    profileTab() { 
        return (
            <Link to={`/users/${this.props.id}`} className="navbar-profile-link">
                Profile
            </Link>
        )
    }



    render() { 
        return (
            <div className="navbar">
                <div className="left-navbar">
                    { this.huddleUpTab() }
                </div>
                <div className="right-navbar">
                    <div className="navbar-links">
                        { this.myEventsTab() }
                        { this.exploreTab() }
                        { this.hostTab() }
                        { this.profileTab() }
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;