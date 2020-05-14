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
        this.getBio = this.getBio.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.getSports = this.getSports.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLocation() {
        if (!this.props.currentUserLocation) {
            return (
                <div>
                    Unknown
                </div>
            )
        } else {
            return (
                <div>
                    {this.props.currentUserLocation}
                </div>
            )
        }
    }

    getBio() {
        if (!this.props.currentUserBio) {
            return (
                <div>
                    No Bio
                </div>
            )
        } else {
            return (
                <div>
                    {this.props.currentUserBio}
                </div>
            )
        }
    }

    getSports() {
        if (this.props.currentUserSports.length === 0) {
            return (
                <div>No sports listed</div>
            )
        } else {
            return(
                <div>
                    {this.props.currentUserSports.map(sport => (
                        <li>
                            {sport}
                        </li>
                    ))}
                </div>
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
                                    {this.props.currentUsername}
                                </div>
                                <br />
                                <div className="profile-location">
                                    <div className="profile-location-icon">
                                        <GrMapLocation />
                                    </div>
                                    <div className="profile-location-word">
                                        {this.getLocation()}
                                    </div>
                                </div>
                                <br />
                                <Link to="profile/edit" className="edit-link">Edit</Link>
                            </div>
                        </div>
                    </div>
                    <div className="profile-right">
                        <div className="profile-bio">
                        Bio:
                        <br />
                        <br />
                        {this.getBio()}
                    </div>
                        <br />
                        <div className="profile-sports">
                            <br />
                            Sports:
                            <br />
                            <br />
                            {this.getSports()}
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
