import React from "react"; 
import { Link } from "react-router-dom";
import "../../reset.css";
import "./navbar.css"

class NavBar extends React.Component { 
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
                        <Link to="/" className="navbar-host-link">
                            Host
                        </Link>
                        <Link to="/profile" className="navbar-profile-link">
                            Profile
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;