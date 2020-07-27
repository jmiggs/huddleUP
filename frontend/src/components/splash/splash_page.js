import React from "react"; 
import { Link } from "react-router-dom";
import "../../reset.css";
import "./splash_page.css";
// import NavBarContainer from "../navbar/navbar_container";
import Footer from "../footer/footer";



const goToSignUp = () => {
    window.location.href = '/#/signup';
}



const SplashPage = props => { 
    return (
        <div className="splash-container">

            <div className="top-banner">
                <div className="splash-nav-container">
                    <div className="splash-nav">
                        {/* <Link to="/" className="splash-nav-link">huddleUP</Link> */}
                        <p id="splash-huddleup">huddleUP</p>
                        <div className="auth-nav">
                            <Link to="/login" id="login" className="splash-nav-link">Log In</Link>
                            <Link to="/signup" id="signup" className="splash-nav-link">Sign Up</Link>
                        </div>
                    </div> 
                </div>
                <div className="top-banner-not-the-nav"> 
                    <div className="top-banner-text">
                        <h1 className="main-phrase">Nobody to play with? We got you covered.</h1>
                        <p className="main-phrase-caption">Go outside knowing that you won't be bored playing by yourself.</p>
                        <div className="signup-div">
                            {/* <div className="signup-splash-button">
                                <Link to="/signup" className="signup-splash-button-text">Sign Up, Have Fun</Link>
                            </div> */}
                            <div className="signup-splash-button-wrapper">
                                <div className="signup-splash-button" onClick={goToSignUp}> 
                                    <p className="signup-splash-button-text">Sign Up, Have Fun</p>
                                </div>
                            </div>
                            <p className="signin-splash-text">Already using huddleUP? <Link to="/login" className="signin-splash-link">Log In</Link></p>
                        </div>
                    </div>
                    {/* <img className="top-banner-picture" src="cartoon-soccer-players.jpg" alt="Soccer Cartoon" /> */}
                    <div className="top-banner-picture-container">
                        <img className="top-banner-picture" src="tennis.png" alt="tennis"/>
                    </div>
                </div>
            </div>
            <div className="bottom-half-of-splash-container">
                <div className="bottom-half-of-splash">
                    <h1 className="what-is-huddleup">What is huddleUP?</h1>
                    <div className="huddleup-is"> 

                        <div className="huddleup-is-one">
                            <div className="huddleup-is-bottom-text-pic">
                                {/* <img className="huddleup-one-img" src="bay-area.jpg" alt="bayareapic" /> */}
                                <img className="huddleup-one-img" src="map.png" alt="map" />
                            </div>
                            <div className="huddleup-is-bottom-text">
                                <h2>1. Find a loction</h2>
                                <p>Pick a location near you for convenience.</p>
                            </div>
                        </div>

                        <div className="huddleup-is-two">
                            <div className="huddleup-is-bottom-text-pic">
                                {/* <img className="huddleup-two-img" src="subscribe-event.jpg" alt="subscribepic"/> */}
                                <img className="huddleup-two-img" src="booked.png" alt="booked" />
                            </div>
                            <div className="huddleup-is-bottom-text">
                                <h2>2. Host or Join</h2>
                                <p>Found a fun event? Join it. Can't find any? Why not just host them.</p>
                            </div>
                        </div>

                        <div className="huddleup-is-three">
                            <div className="huddleup-is-bottom-text-pic">
                                {/* <img className="huddleup-three-img" src="message.jpg" alt="messagepic"/> */}
                                <img className="huddleup-three-img" src="calendar.png" alt="calendar" />
                            </div>
                            <div className="huddleup-is-bottom-text">
                                <h2>3. Now or later</h2>
                                <p>Tell everyone you're out right now, or make plans for the future. </p>
                            </div>
                        </div>

                        <div className="huddleup-is-four">
                            <div className="huddleup-is-bottom-text-pic">
                                {/* <img className="huddleup-four-img" src="outside.jpg" alt="outsidepic" /> */}
                                <img className="huddleup-four-img" src="basketball.png" alt="basketball" />
                            </div>
                            <div className="huddleup-is-bottom-text">
                                <h2>4. Play</h2>
                                <p>Go out and have some fun.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="signup-bottom-button">
                        <Link to="/signup" className="signup-bottom-button-text">Let's Go</Link>
                    </div> */}
                    <div className="signup-bottom-button-container">
                        <div className="signup-bottom-button" onClick={goToSignUp}>
                            <p className="signup-bottom-button-text">Let's Go</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SplashPage;