import React from "react";
import { Link } from "react-router-dom";
import "../../reset.css";
import "./edit_profile_page.css"
import ImageUploader from "react-images-upload";
import NavBar from "../navbar/navbar";

class EditProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: [],
            username: "",
            location: "",
            bio: "",
            sports: ""
        }
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return(
        <div>
            <NavBar/>
            <div className = "edit-profile">
                <h3 className="edit-profile-title">Edit Profile Page</h3>
                <form className = "edit-form">
                    <div className ="edit-left">
                        <label className="upload-header">Upload profile picture</label>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                            className = "profile-uploader"
                        />
                        <label>Username</label>
                        <input
                            type="text"
                        // value={this.state.title}
                        // onChange={this.handleInput('title')}
                            className="edit-username-textbox"
                        />
                        <br/>
                        <label>Location</label>
                        <input
                            type="text"
                            className="edit-location-textbox"
                        />
                    </div>
                    <div className = "edit-right">
                        <label>Bio</label>
                        <textarea
                            cols="40"
                            rows="10"
                        />
                        <br/>
                        <label className = "sports-dropdown">Sports</label>
                            <p className ="drop-down-description"> hold cmd button to select multiples </p>
                            <select id="sports" multiple>
                                <option value="basketball">basketball</option>
                                <option value="golf">golf</option>
                                <option value="football">football</option>
                                <option value="soccer">soccer</option>
                                <option value="tennis">tennis</option>
                            </select>
                        <br/>
                        <Link to = "/" className="edit-update-btn">Update</Link>
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