import React from "react";
// import { Link } from "react-router-dom";
import "../../reset.css";
import "./edit_profile_page.css"
// import ImageUploader from "react-images-upload";
import NavBar from "../navbar/navbar";
// import { fetchUser } from "../../actions/users_actions";
// import axios from 'axios';
// import { GrFedora } from "react-icons/gr";

class EditProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.onDrop = this.onDrop.bind(this);
        this.routeBackToProfile = this.routeBackToProfile.bind(this);
        this.sportsList = this.sportsList.bind(this);
        // this.fileChangedHandler = this.fileChangedHandler.bind(this);
        // this.fileUploadHandler = this.fileUploadHandler.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchUser(this.props.match.params.id)
    // }

    // onDrop(picture) {   
    //     this.setState({
    //         picture: this.state.picture,
    //     });
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateUser(this.state)
            // .then((user) => this.routeBackToProfile(user))
    }

    update(type) {
        return (e) => { this.setState({ [type]: e.currentTarget.value }) };
    } 

    routeBackToProfile(user) {
        this.props.history.push(`/users/${user.id}`)
    }

    sportsList() {
        const selected = document.querySelectorAll('#sports option:checked');
        // const values = Array.from(selected).map(el => el.value);
        return (
            <div>
                <select id="sports" multiple="multiple">
                    <option value="basketball">basketball</option>
                    <option value="golf">golf</option>
                    <option value="football">football</option>
                    <option value="soccer">soccer</option>
                    <option value="tennis">tennis</option>
                </select>
            </div>
        )
    }

    // fileChangedHandler(event) {
    //     this.setState({
    //         picture: event.target.files[0]
    //     })
    // }

    // fileUploadHandler(){
    //     const formData = new FormData();
    //     formData.append('image', this.state.picture, this.state.picture.name);
    //     axios.post('https://s3.console.aws.amazon.com/s3/buckets/huddle-up-dev/?region=us-west-1', formData)
    // }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        if (file) {
             this.getSignedRequest(file)
        }
    }


    getSignedRequest(file) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    // where error occurs and alerts saying could not get signed URL
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
                        <label className="upload-header">Upload profile picture</label>
                        {/* <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                            className = "profile-uploader"
                        /> */}
                        {/* <input type="file" onChange={this.fileChangedHandler}/>
                        <button onClick = {this.fileUploadHandler}>Upload</button> */}
                        <label>
                            Upload
                            <input 
                                type="file"
                                onChange={this.handleFile}
                            />
                        </label>
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
                            placeholder={this.state.bio}
                            onChange={this.update('bio')}
                        />
                        <br/>
                        <label className = "sports-dropdown">Sports</label>
                            <div className ="drop-down-description"> hold cmd button to select multiples </div>
                            {this.sportsList()}
                        <br/>
                        <input
                            className="edit-update-btn"
                            type="submit"
                            value="Update"
                            // onClick={this.routeBackToProfile(this.state)}
                        />
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

// const EditProfilePage = props => {
//     return (
//         <div>
//             <h3>Edit Profile Page</h3>
//             <form>
//                 <label>Upload profile picture</label>
//                 <label>Username</label>
//                 <input
//                     type="text"
//                     // value={this.state.title}
//                     // onChange={this.handleInput('title')}
//                 />
//                 <label>Location</label>
//                 <input
//                     type="text"
//                 />
//                 <label>Bio</label>
//                 <textarea
//                     cols="40"
//                     rows="10"
//                 />
//                 <label>Sports</label>
//                 <select id="sports">
//                     <option value="basketball">basketball</option>
//                     <option value="soccer">soccer</option>
//                 </select>
//             </form>
//         </div>
//     )
// }

export default EditProfilePage;