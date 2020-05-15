import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import NavBar from "../navbar/navbar";
import { Multiselect } from 'multiselect-react-dropdown';
import "../../reset.css";
import "./edit_profile_page.css"

class EditProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.routeBackToProfile = this.routeBackToProfile.bind(this);
        this.sportsList = this.sportsList.bind(this);
        this.handleFile = this.handleFile.bind(this); 
        this.multiselectRef = React.createRef();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state, this.routeBackToProfile())
    }

    routeBackToProfile() {
        this.props.history.push(`/users/${this.props.id}`)
    }

    update(type) {
        return (e) => { this.setState({ [type]: e.currentTarget.value }) };
    } 

    handleChange(selectedSports) {
        this.setState({selectedSports})
    } 

    handleDeselect(index) {
        const selectedSports = this.state.sports.slice()
        selectedSports.splice(index, 1)
        this.setState({ selectedSports })
    }

    sportsList() {
        let options = [
            { value: "basketball", text: 'basketball' },
            { value: "golf", text: 'golf' },
            { value: "football", text: 'football' },
            { value: "soccer", text: 'soccer' },
            { value: "tennis", text: 'tennis' }
        ]
        const selectedSports = this.state.sports
        return(   
            <div className = "edit-sports-selection">
            <br/>
            < Multiselect
                options={options} //Options to display in the dropdown
                selectedValues={selectedSports} // Preselected value to persist in dropdown
                onSelect={this.onSelect} // Function will trigger on select event
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="value" //value name
            />
            </div>
        )
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        if (file) {
             this.getSignedRequest(file)
        }
    }


    getSignedRequest(file) {
        const xhr = new XMLHttpRequest();
        // here
        xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                debugger
                // makes status === 0
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    this.uploadFile(file, response.signedRequest, response.url);
                }
                else {
                    alert('Could not get signed URL.');
                }
            }
        };
        xhr.send();
    }

    uploadFile(file, signedRequest, url) {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', signedRequest);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.setState({ picture: url })
                }
                else {
                    alert('Could not upload file.');
                }
            }
        };
        xhr.send(file);
    }

    render() {
        return(
        <div>
            <NavBar/>
            <div className = "edit-profile">
                <h3 className="edit-profile-title">Edit Profile Page</h3>
                <form className = "edit-form" onSubmit = {this.handleSubmit}>
                    <div className ="edit-left">
                            <label className="upload-header">
                                Upload profile picture
                                <br/>
                                <input
                                type="file"
                                onChange={this.handleFile}
                                />
                                {/* <input
                                    accept = "image/*"
                                    type="file"
                                    onChange={this.update('picture')}
                                /> */}
                            </label>
                        <br/>
                        <label>Username</label>
                        <input
                            type="text"
                            className="edit-username-textbox"
                            value = {this.state.username}
                            onChange={this.update('username')}
                        />
                        <br/>
                        <label>Location</label>
                        <input
                            type="text"
                            className="edit-location-textbox"
                            value={this.state.location}
                            onChange={this.update('location')}
                        />
                    </div>
                    <div className = "edit-right">
                        <label>Bio</label>
                        <textarea
                            cols="40"
                            rows="10"
                            value={this.state.bio}
                            onChange={this.update('bio')}
                        />
                        <br/>
                        <label className = "sports-dropdown">Sports</label>
                            <div className ="drop-down-description"> 
                                hold cmd button to select multiples 
                            </div>
                            {this.sportsList()}
                        <br/>
                        <input
                            className="edit-update-btn"
                            type="submit"
                            value="Update"
                        />
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default EditProfilePage;