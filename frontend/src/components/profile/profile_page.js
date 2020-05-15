import React from "react";
// import axios from 'axios';
import { Link } from "react-router-dom";
import "../../reset.css";
import "./profile_page.css"
import NavBar from '../navbar/navbar';
import { GrMapLocation } from 'react-icons/gr';
import MJPic from '../../assets/Michael-Jordan-1987.png';
import Footer from "../footer/footer";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.logoutUser = this.logoutUser.bind(this);
        this.getBio = this.getBio.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.getSports = this.getSports.bind(this);
        this.editLink = this.editLink.bind(this);
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.user !=.id= prevProps.user) {
    //         this.props.fetchUser(this.props.user.id)
    //     }
    // }

    componentDidMount() {
        this.props.fetchUser(this.props.user.id)
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLocation() {
        if (!this.props.user.currentUserLocation) {
            return (
                <div>
                    Unknown
                </div>
            )
        } else {
            return (
                <div>
                    {this.props.user.currentUserLocation}
                </div>
            )
        }
    }

    getBio() {
        if (!this.props.user.currentUserBio) {
            return (
                <div>
                    No Bio
                </div>
            )
        } else {
            return (
                <div>
                    {this.props.user.currentUserBio}
                </div>
            )
        }
    }

    getSports() {
        if (this.props.user.currentUserSports.length === 0) {
            return (
                <div>No sports listed</div>
            )
        } else {
            return(
                <div>
                    {this.props.user.currentUserSports.map(sport => (
                        <li>
                            {sport}
                        </li>
                    ))}
                </div>
            )
        }
    }

    editLink() {
        // might have to change to verify this is the same user to allow editing
        if (this.props.user) {
            return (
                <Link to={`${this.props.user.id}/edit`} className="edit-link">Edit</Link>
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
                                    {/* <div className="profile-picture"> */}
                                    {
                                        this.props.user.currentUserPicture ? 
                                            <img className = "profile-picture" src={this.props.user.currentUserPicture} alt="" height="290" width="220" /> : 
                                            <img className="profile-picture" src={MJPic} alt=""/>}
                                    {/* <img 
                                        className="profile-picture"
                                        src={this.props.currentUserPicture}
                                        width="100"
                                        height="80"
                                        alt="user-profile-picture"
                                    /> */}
                                    {/* </div> */}
                                </div>
                                <br />
                                <div className="profile-name">
                                    {this.props.user.currentUsername}
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
                                {this.editLink()}
                            </div>
                        </div>
                    </div>
                    <div className="profile-right">
                        <div className="profile-bio">
                            <div className="profile-bio-title">
                                Bio:
                            </div>
                            <br/>
                        {this.getBio()}
                    </div>
                        <br />
                        <div className="profile-sports">
                            <br />
                            <div className="profile-sports-title">
                                Sports:
                            </div>
                            <br />
                            {this.getSports()}
                        </div>
                        <br/>
                        <div className="profile-logout-btn">
                            <Link to="/" onClick={this.logoutUser} className="profile-logout-btn-text">Logout</Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


export default ProfilePage;
