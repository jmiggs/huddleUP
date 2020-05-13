import React from "react";
// import axios from 'axios';
import { Link } from "react-router-dom";
import "../../reset.css";
import "./profile_page.css"
import NavBar from '../navbar/navbar';
import { GrMapLocation } from 'react-icons/gr';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getCurrentUsername = this.getCurrentUsername.bind(this);
    }

    // componentDidMount() {
    //     // debugger
    //     // axios.get('http:localhost:5000/api/users/current')
    //     //     .then(res => res.json())
    //     //     .then(user => this.setState({username: user.username}))
    //     this.props.getUser(this.props.currentUser)
    // }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getCurrentUsername() {
        if (this.props.loggedIn) {
            return (
                <div>
                    {this.props.currentUsername}
                    error
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="profile-upper-section">
                    <div className="profile-left">
                        <div className="profile-left-corner">
                            <div className="profile-picture-w-name">
                                <div className="profile-picture-box">
                                    {/* where profile picture image will go */}
                                    <img className="profile-picture"></img>
                                </div>
                                <br />
                                <div className="profile-name">
                                    s{this.getCurrentUsername()}
                                </div>
                                <br />
                                <div className="profile-location">
                                    <div className="profile-location-icon">
                                        <GrMapLocation />
                                    </div>
                                    {/* put in location */}
                                    <div className="profile-location-word">
                                        Location
                                </div>
                                </div>
                                <br />
                                {/* replace link with edit */}
                                <Link to="profile/edit" className="edit-link">Edit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="profile-right">
                        <div className="profile-bio">
                            {/* bio */}
                        Bio:
                        <br />
                            <br />
                        Young MJ coming up
                        7'2" need ballers to play with
                    </div>
                        <br />
                        <div className="profile-sports">
                            {/* sports */}
                            <br />
                        Sports:
                        <br />
                            <br />
                            <li>
                                Basketball
                        </li>
                        </div>
                        <br />
                        <div className="profile-logout-btn">
                            <Link to="/" onClick={this.logoutUser} className="profile-logout-btn-text">Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ProfilePage;
