import React from "react"; 
import NavBarContainer from "../navbar/navbar_container";
import { GuardSpinner } from "react-spinners-kit";
import "../../reset.css";
import "./activity_form.css";
import Footer from "../footer/footer";

const google = window.google;

class ActivityForm extends React.Component { 
    constructor(props) { 
        super(props)
        this.state = props.activity 

        this.update = this.update.bind(this);
        this.formSubmission = this.formSubmission.bind(this);
        this.renderSubmitButton = this.renderSubmitButton.bind(this);
        this.initMap = this.initMap.bind(this);
    }

    update(field) { 
        return e => {
            if (field === "location") { 
                this.setState({ [field]: e.target.value, lat: null, lng: null })
            } else { 
                this.setState({ [field]: e.target.value })
            }
        }
    }

    formSubmission(e) { 
        e.preventDefault()
        this.setState({ clicked: true })
        if (this.props.formType === "Edit") { 
            this.props.action(this.state)
                .then(window.location.href = `/#/activity/${this.state._id}`);
        } else { 
            this.props.action(this.state)
                .then(window.location.href = "/#/dashboard");
        }
        
    }

    renderSubmitButton() { 
        if (this.state.clicked) {
            return <div className="activity-form-spinner"><GuardSpinner size={20} frontColor="#EF8354" backColor="#2D3142" loading={this.state.clicked} /></div>;
        } else if (this.state.title.trim().length &&
            this.state.location.trim().length &&
            this.state.sport.trim().length && 
            this.state.numplayersneed.toString().trim().length && // This doesn't work for the edit page because it's a number when it's brought up from the db
            this.state.day.trim().length && 
            this.state.time.trim().length && 
            this.state.lat && 
            this.state.lng) { 
                if (this.props.formType === "Host") { 
                    return <input type="submit" value="Host" className="submit-activity" />
                } else if (this.props.formType === "Edit") { 
                    return <input type="submit" value="Edit" className="submit-activity" />
                }
        } else { 
            return < input type="submit" value="Host" className="submit-activity-faded" />
        }
    }

    componentDidMount() { 
        if (this.props.currentUser) { 
            this.initMap()
        }
    }

    initMap() { // Google
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: { lat: 37.7749295, lng: -122.4194155 }
        });
        let geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', () => {
            this.geocodeAddress(geocoder, map);
        });
    }

    geocodeAddress(geocoder, resultsMap) { // Google
        let address = document.getElementById('address').value;
        geocoder.geocode({ 'address': address }, (results, status) => {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);

                let marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });

                let lat = results[0].geometry.location.lat()
                let lng = results[0].geometry.location.lng()
                let location = results[0].formatted_address
                this.setState({ location, lat, lng })
                // console.log(this.state)
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    render() {
        if (!this.props.currentUser && !this.props.activity) return null;
        
        return (
            <div>
                <NavBarContainer />
                <div className="activity-form-page">
                    <div className="activity-box-box">

                        {/* <div id="floating-panel"> Google 
                            <input id="address" type="textbox" value={this.state.location} onChange={this.update("location")} />
                            <input id="submit" type="button" value="Geocode" />
                        </div> */}
                        <div id="map" className="activity-form-map"></div>
                        
                        {/* <form className="activity-form" onSubmit={this.formSubmission}></form> */}
                        <form className="activity-form" onSubmit={e => this.formSubmission(e)}>
                            <div className="activity-input-container">
                                <label className="activity-form-label">Title</label>
                                <input type="text" value={this.state.title} onChange={this.update("title")} className="activity-input-field" />
                            </div>

                            <div className="activity-input-container">
                                <label className="activity-form-label">Location</label>
                                {/* <input type="text" value={this.state.location} onChange={this.update("location")} className="activity-input-field" /> */}
                                <input id="address" type="textbox" value={this.state.location} onChange={this.update("location")} className="activity-input-field" />
                                <input id="submit" type="button" value="Find" className="find-form-button" />
                            </div>

                            <div className="activity-input-container">
                                <label className="activity-form-label">Sport</label>
                                <select onChange={this.update("sport")} className="form-dropdown">
                                    <option value={this.state.sport}></option>
                                    <option value="basketball">Basketball</option>
                                    <option value="football">Football</option>
                                    <option value="soccer">Soccer</option>
                                    <option value="tennis">Tennis</option>
                                    <option value="golf">Golf</option>
                                </select>
                                {(this.props.formType === "Edit") ? 
                                <p className="original-values">Original: {this.state.sport.charAt(0).toUpperCase() + this.state.sport.slice(1)}</p> : 
                                null }
                            </div>

                            <div className="activity-input-container">
                                <label className="activity-form-label">Description</label>
                                <textarea value={this.state.description} onChange={this.update("description")} className="activity-input-field" />
                            </div>

                            <div className="activity-input-container"> 
                                <label className="activity-form-label">Number of Players Needed</label>
                                <select onChange={this.update("numplayersneed")} className="form-dropdown">
                                    <option value={this.state.numplayersneed}></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                </select>
                                {(this.props.formType === "Edit") ?
                                    <p className="original-values">Original: {this.state.numplayersneed}</p> :
                                null}                           
                            </div>

                            <div className="activity-input-container">
                                <label className="activity-form-label">Pick a Day</label>
                                <input type="date" onChange={this.update("day")} value={this.state.day} className="time-date-input" />
                            </div>

                            <div className="activity-input-container">
                                <label className="activity-form-label">Choose a Start Time (HH:MM A/P)</label>
                                {/* <input type="time" onChange={this.update("time")} value={this.state.time} className="time-date-input" /> */}
                                <select onChange={this.update("time")} className="form-dropdown">
                                    <option value={this.state.time}></option>
                                    <option value="7:00AM">7:00AM</option>
                                    <option value="7:30AM">7:30AM</option>
                                    <option value="8:00AM">8:00AM</option>
                                    <option value="8:30AM">8:30AM</option>
                                    <option value="9:00AM">9:00AM</option>
                                    <option value="9:30AM">9:30AM</option>
                                    <option value="10:00AM">10:00AM</option>
                                    <option value="10:30AM">10:30AM</option>
                                    <option value="11:00AM">11:00AM</option>
                                    <option value="11:30AM">11:30AM</option>
                                    <option value="12:00PM">12:00PM</option>
                                    <option value="12:30PM">12:30PM</option>
                                    <option value="1:00PM">1:00PM</option>
                                    <option value="1:30PM">1:30PM</option>
                                    <option value="2:00PM">2:00PM</option>
                                    <option value="2:30PM">2:30PM</option>
                                    <option value="3:00PM">3:00PM</option>
                                    <option value="3:30PM">3:30PM</option>
                                    <option value="4:00PM">4:00PM</option>
                                    <option value="4:30PM">4:30PM</option>
                                    <option value="5:00PM">5:00PM</option>
                                    <option value="5:30PM">5:30PM</option>
                                    <option value="6:00PM">6:00PM</option>
                                    <option value="6:30PM">6:30PM</option>
                                    <option value="7:00PM">7:00PM</option>
                                    <option value="7:30PM">7:30PM</option>
                                    <option value="8:00PM">8:00PM</option>
                                    <option value="8:30PM">8:30PM</option>
                                    <option value="9:00PM">9:00PM</option>
                                    <option value="9:30PM">9:30PM</option>
                                    <option value="10:00PM">10:00PM</option>
                                </select>
                                {(this.props.formType === "Edit") ?
                                    <p className="original-values">Original: {this.state.time}</p> :
                                null}  
                            </div>

                            {/* <div className="activity-input-container">
                                <label className="activity-form-label">Latitude</label>
                                <input type="text" onChange={this.update("lat")} value={this.state.lat} className="activity-input-field" />
                            </div>

                            <div className="activity-input-container">
                                <label className="activity-form-label">Longitude</label>
                                <input type="text" onChange={this.update("lng")} value={this.state.lng} className="activity-input-field" />
                            </div> */}

                            {this.renderSubmitButton()}
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
};

export default ActivityForm;