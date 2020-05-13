import React from "react"; 
import NavBarContainer from "../navbar/navbar_container";
import "./activity_form.css"

class ActivityForm extends React.Component { 
    constructor(props) { 
        super(props)
        this.state = props.activity 

        this.update = this.update.bind(this);
        this.formSubmission = this.formSubmission.bind(this);
        this.renderSubmitButton = this.renderSubmitButton.bind(this);
    }

    update(field) { 
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    formSubmission(e) { 
        e.preventDefault()
        this.props.action(this.state)
        this.setState({ clicked: true })
        window.location.href = "/dashboard";
    }

    renderSubmitButton() { 
        if (this.state.clicked) {
            return <input type="submit" value="clicked" className="submit-activity-faded" />
        } else if (this.state.title.trim().length &&
            this.state.location.trim().length &&
            this.state.sport.trim().length &&
            this.state.numplayersneed.trim().length) { 
            return <input type = "submit" value = "Host" className = "submit-activity" />
        } else { 
            return < input type = "submit" value = "Host" className = "submit-activity-faded" />
        }
    }

    render() {
        if (!this.props.currentUser) return null;
        // debugger 
        return (
            <div>
                <NavBarContainer />
                <div className="activity-form-page">
                    <div className="activity-box-box">
                        <div className="activity-form-map">
                        </div>
                        
                        <form className="activity-form" onSubmit={this.formSubmission}>
                            <div className="activity-input-container">
                                <label className="activity-form-label">Title</label>
                                <input type="text" value={this.state.title} onChange={this.update("title")} className="activity-input-field" />
                            </div>

                            <div className="activity-input-container">
                                <label className="activity-form-label">Location</label>
                                <input type="text" value={this.state.location} onChange={this.update("location")} className="activity-input-field" />
                            </div>

                            <div className="activity-input-container">
                                <label className="activity-form-label">Sport</label>
                                <select onChange={this.update("sport")} className="sport-dropdown">
                                    <option value=""></option>
                                    <option value="basketball">Basketball</option>
                                    <option value="football">Football</option>
                                    <option value="soccer">Soccer</option>
                                    <option value="tennis">Tennis</option>
                                    <option value="golf">Golf</option>
                                </select>

                                {/* <label className="activity-form-label">Sport</label>
                                <input type="text" value={this.state.sport} onChange={this.update("sport")} /> */}
                            </div>

                            <div className="activity-input-container">
                                <label className="activity-form-label">Description</label>
                                <textarea value={this.state.description} onChange={this.update("description")} className="activity-input-field" />
                            </div>

                            <div className="activity-input-container"> 
                                <label className="activity-form-label">Number of Players Needed</label>
                                <select onChange={this.update("numplayersneed")} className="num-players-dropdown">
                                    <option value=""></option>
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

                                {/* <label className="activity-form-label">Number of Players Needed</label>
                                <input type="text" value={this.state.numplayersneed} onChange={this.update("numplayersneed")} /> */}
                            </div>

                            {this.renderSubmitButton()}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

export default ActivityForm;