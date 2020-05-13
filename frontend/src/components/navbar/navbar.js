import React from "react"; 
import { Link } from "react-router-dom";
import "../../reset.css";
import "./navbar.css"

class NavBar extends React.Component { 
    constructor(props) { 
        super(props)
        this.logoutUser = this.logoutUser.bind(this);
        // this.getLinks = this.getLinks.bind(this);
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

    render() { 
        return (
            <div className="navbar">
                <div className="left-navbar">
                    {/* should later redirect to their home page */}
                    <Link to="/" className="navbar-name">
                        huddleUP
                    </Link>
                </div>
                <div className="right-navbar">
                    <div className="navbar-links">
                        {/* redirect to explore page */}
                        <Link to="/" className="navbar-explore-link">
                            Explore
                        </Link>
                        {/* redirect to host page */}
                        <Link to="/activities/host" className="navbar-host-link">
                            Host
                        </Link>
                        <Link to="/profile" className="navbar-profile-link">
                            Profile
                        </Link>
                        {/* <button onClick={this.logoutUser}>Logout</button> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;