import React, { useEffect, useState } from "react";
import NavBarContainer from "../navbar/navbar_container";
import { GuardSpinner } from "react-spinners-kit";
import "../../reset.css";
import "./activity_form.css";
import Footer from "../footer/footer";

const google = window.google;

const ActivityForm = props => {
    const [location, setLocation] = useState(props.activity.location);
    const [title, setTitle] = useState(props.activity.title);
    const [sport, setSport] = useState(props.activity.sport);
    const [description, setDescription] = useState(props.activity.description);
    const [numplayersneed, setNumplayersneed] = useState(props.activity.numplayersneed);
    const [day, setDay] = useState(props.activity.day);
    const [time, setTime] = useState(props.activity.time);
    const [lat, setLat] = useState(props.activity.lat);
    const [lng, setLng] = useState(props.activity.lng);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        if (props.currentUser) initMap();
    }, []);

    const changingLocation = currentLocation => {
        setLocation(currentLocation);
        setLat(null);
        setLng(null);
    };

    const validateActivityForm = () => {
        if (title.trim().length &&
            location.trim().length &&
            sport.trim().length &&
            numplayersneed.toString().trim().length && // Have to convert it to a string because an integer is brought up from the db with the edit form
            day.trim().length &&
            time.trim().length &&
            lat &&
            lng) {
            return true;
        } else {
            return false;
        }
    };

    const formSubmission = e => {
        e.preventDefault()
        if (validateActivityForm()) {
            setClicked(true);
            const activity = { 
                 _id: props.activity._id,
                title,
                location,
                sport,
                description,
                numplayersneed,
                day,
                time,
                host: props.activity.host,
                lat,
                lng
            };

            if (props.formType === "Edit") {
                props.action(activity)
                    .then(window.location.href = `/#/activity/${activity._id}`);
            } else {
                props.action(activity)
                    .then(data => window.location.href = `/#/activity/${data.activity._id}`);
            }
        } else {
            return
        }
    };

    const renderSubmitButton = () => {
        if (clicked) {
            return <div className="activity-form-spinner"><GuardSpinner size={20} frontColor="#EF8354" backColor="#2D3142" loading={clicked} /></div>;
        } else if (validateActivityForm()) {
            if (props.formType === "Host") {
                return <input type="submit" value="Host" className="submit-activity" />
            } else if (props.formType === "Edit") {
                return <input type="submit" value="Edit" className="submit-activity" />
            }
        } else {
            return < input type="submit" value="Host" className="submit-activity-faded" />
        }
    };

    const initMap = () => { // Google
        let currLat = lat ? lat : 37.7749295;
        let currLng = lng ? lng : -122.4194155;
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: { lat: currLat, lng: currLng }
        });
        let geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', () => {
            geocodeAddress(geocoder, map);
        });
    };

    const geocodeAddress = (geocoder, resultsMap) => { // Google
        let address = document.getElementById('address').value;
        geocoder.geocode({ 'address': address }, (results, status) => {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);

                let marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location
                });
                
                let lat = results[0].geometry.location.lat();
                let lng = results[0].geometry.location.lng();
                let location = results[0].formatted_address;

                setLat(lat);
                setLng(lng);
                setLocation(location);
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };

    if (!props.currentUser && !props.activity) return null;
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    return (
        <div>
            <NavBarContainer />
            <div className="activity-form-page">
                <div className="activity-box-box">

                    <div id="map" className="activity-form-map"></div>

                    <form className="activity-form" onSubmit={e => formSubmission(e)}>
                        <div className="activity-input-container">
                            <label className="activity-form-label">Title</label>
                            <input type="text" value={title} onChange={e => setTitle(e.currentTarget.value)} className="activity-input-field" />
                        </div>

                        <div className="activity-input-container">
                            <label className="activity-form-label">Location</label>
                            <input id="address" type="textbox" value={location} onChange={e => changingLocation(e.currentTarget.value)} className="activity-input-field" />
                            <input id="submit" type="button" value="Find" className="find-form-button" />
                        </div>

                        <div className="activity-input-container">
                            <label className="activity-form-label">Sport</label>
                            <select onChange={e => setSport(e.currentTarget.value)} className="form-dropdown">
                                <option value={sport}></option>
                                <option value="basketball">Basketball</option>
                                <option value="football">Football</option>
                                <option value="soccer">Soccer</option>
                                <option value="tennis">Tennis</option>
                                <option value="golf">Golf</option>
                            </select>
                            {(props.formType === "Edit") ?
                                <p className="original-values">Original: {sport.charAt(0).toUpperCase() + sport.slice(1)}</p> :
                                null}
                        </div>

                        <div className="activity-input-container">
                            <label className="activity-form-label">Description</label>
                            <textarea value={description} onChange={e => setDescription(e.currentTarget.value)} className="activity-input-field" />
                        </div>

                        <div className="activity-input-container">
                            <label className="activity-form-label">Number of Players Needed</label>
                            <select onChange={e => setNumplayersneed(e.currentTarget.value)} className="form-dropdown">
                                <option value={numplayersneed}></option>
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
                            {(props.formType === "Edit") ?
                                <p className="original-values">Original: {numplayersneed}</p> :
                                null}
                        </div>

                        <div className="activity-input-container">
                            <label className="activity-form-label">Pick a Day</label>
                            <input type="date" min={today} onChange={e => setDay(e.currentTarget.value)} value={day} className="time-date-input" />
                        </div>

                        <div className="activity-input-container">
                            <label className="activity-form-label">Choose a Start Time (HH:MM A/P)</label>
                            <select onChange={e => setTime(e.currentTarget.value)} className="form-dropdown">
                                <option value={time}></option>
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
                            {(props.formType === "Edit") ?
                                <p className="original-values">Original: {time}</p> :
                                null}
                        </div>

                        <div className="form-buttons-container">
                            {renderSubmitButton()}
                            <button className="cancel-form-button" onClick={(e) => {
                                if (props.formType === "Edit") {
                                    e.preventDefault();
                                    window.location.href = `/#/activity/${props.activity._id}`;
                                } else {
                                    e.preventDefault();
                                    window.location.href = "/#/dashboard";
                                }
                            }}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default ActivityForm;