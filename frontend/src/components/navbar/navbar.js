import React from "react"; 
import "../../reset.css";
import "./navbar.css"
import { Link } from "react-router-dom";

class NavBar extends React.Component { 
    constructor(props) { 
        super(props)
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) { 
        e.preventDefault();
        this.props.logout();
    }

    getLinks() { // I like how they abstracted this away from the render. I'm going to do this from now on.
        if (this.props.loggedIn) { 
            return ( 
                <div>
                    <Link to="/">Explore</Link>
                    <Link to="/">Profile</Link>
                    <Link to="/">Host</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            )
        } else { 
            return (
                <div>
                    <Link to="/">Explore</Link>
                    <Link to="/">Log In</Link>
                    <Link to="/">Sign Up</Link>
                </div>
            )
        }
    }

    render() { 
        return (
            <div className="navbar">
                <h1>huddleUP</h1>
                {this.getLinks()} {/* Make note of this. It's really cool to use a function like this. */}
            </div>
        )
    }
}

export default NavBar;