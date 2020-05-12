import React from "react";
import { Link } from "react-router-dom";
import "../../reset.css";
import "./profile_page.css"
import NavBar from '../navbar/navbar';
import { GrMapLocation } from 'react-icons/gr';

const ProfilePage = props => {
    return(
        <div>
            <NavBar/>
            <div className = "profile-upper-section">
                <div className = "profile-left">
                    <div className = "profile-left-corner">
                        <div className = "profile-picture-w-name">
                            <div className = "profile-picture-box">
                                {/* where profile picture image will go */}
                                <img className = "profile-picture"></img>
                            </div>
                            <br />
                            <div className = "profile-name">
                                {/* put in username */}
                                Username
                            </div>
                            <br/>
                            <div className = "profile-location">
                                <div className = "profile-location-icon">
                                    <GrMapLocation/>
                                </div>
                                {/* put in location */}
                                <div className = "profile-location-word">
                                    Location
                                </div>
                            </div>
                            <br/>
                            {/* replace link with edit */}
                            <Link to ="profile/edit" className = "edit-link">Edit</Link>
                        </div>
                    </div>
                </div>
                <div className = "profile-right">
                    <div className = "profile-bio">
                        {/* bio */}
                        Bio:
                        <br/>
                        <br/>
                        Young MJ coming up 
                        7'2" need ballers to play with
                    </div>
                    <br/>
                    <div className = "profile-sports">
                        {/* sports */}
                        <br/>
                        Sports:
                        <br/>
                        <br/>
                        <li>
                            Basketball
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;