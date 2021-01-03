// import React from "react"; 
// import { Link } from "react-router-dom";
// import EventsDropdown from './events_dropdown';
// import "../../reset.css";
// import "./navbar.css"

// class NavBar extends React.Component { 
//     constructor(props) { 
//         super(props)
//         this.state = { slide: false };

//         this.logoutUser = this.logoutUser.bind(this);
//         // this.getLinks = this.getLinks.bind(this);
//         this.huddleUpTab = this.huddleUpTab.bind(this);
//         this.myEventsTab = this.myEventsTab.bind(this);
//         this.exploreTab = this.exploreTab.bind(this);
//         this.hostTab = this.hostTab.bind(this); 
//         this.profileTab = this.profileTab.bind(this);
//         this.slideIn = this.slideIn.bind(this);
//     }

//     logoutUser(e) { 
//         e.preventDefault();
//         this.props.logout();
//     }

//     // I'm going to make this responsive

//     // getLinks() { // I like how they abstracted this away from the render. I'm going to do this from now on.
//     //     if (this.props.loggedIn) { 
//     //         return ( 
//     //             <div>
//     //                 <Link to="/">Explore</Link>
//     //                 <Link to="/">Profile</Link>
//     //                 <Link to="/">Host</Link>
//     //                 <button onClick={this.logoutUser}>Logout</button>
//     //             </div>
//     //         )
//     //     } else { 
//     //         return (
//     //             <div>
//     //                 <Link to="/">Explore</Link>
//     //                 <Link to="/login">Log In</Link>
//     //                 <Link to="/signup">Sign Up</Link>
//     //             </div>
//     //         )
//     //     }
//     // }

//     slideIn() {
//         this.setState({ slide: !this.state.slide })
//     }

//     huddleUpTab() {
//         return (
//             <Link to="/" className="navbar-name">
//                 huddleUP
//             </Link>
//         )
//     }

//     myEventsTab() { 
//         return (
//             <Link to={`/users/${this.props.id}/myevents`} className="navbar-explore-link">
//                 My Events
//             </Link>
//         )
//     }

//     exploreTab() { 
//         return (
//             <Link to="/" className="navbar-explore-link"> 
//                 Explore 
//             </Link>
//         )
//     }

//     hostTab() { 
//         return (
//             <Link to="/activity/host" className="navbar-host-link">
//                 Host
//             </Link> 
//         )
//     }

//     profileTab() { 
//         return (
//             <Link to={`/users/${this.props.id}`} className="navbar-profile-link">
//                 Profile
//             </Link>
//         )
//     }



//     render() { 
//         // if (this.state.slide) document.querySelector("body").classList.add("no-scroll");
//         // if (!this.state.slide) document.querySelector("body").classList.remove("no-scroll");

//         return (
//             <div className="navbar">
//                 <div className="left-navbar">
//                     { this.huddleUpTab() }
//                 </div>
//                 <div className="right-navbar">
//                     { 
//                     (this.state.slide) ? 
//                     <div className="navbar-links slide">
//                         {this.myEventsTab()}
//                         {this.exploreTab()}
//                         {this.hostTab()}
//                         {this.profileTab()}
//                     </div> : 
//                     <div className="navbar-links"> 
//                         {this.myEventsTab()}
//                         {this.exploreTab()}
//                         {this.hostTab()}
//                         {this.profileTab()}
//                     </div>
//                     }
//                     {this.state.slide ?
//                     <div className="burger cross" onClick={this.slideIn}>
//                         <div className="burger-line-1"></div>  
//                         <div className="burger-line-2"></div>
//                         <div className="burger-line-3"></div>
//                     </div>
//                     : 
//                         <div className="burger" onClick={this.slideIn}>
//                             <div className="burger-line-1"></div>
//                             <div className="burger-line-2"></div>
//                             <div className="burger-line-3"></div>
//                         </div>
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

// export default NavBar;






import React, { useState } from "react";
import { Link } from "react-router-dom";
import EventsDropdown from './events_dropdown';
import "../../reset.css";
import "./navbar.css"

const NavBar = props => {
    const [slide, setSlide] = useState(false);

    const logoutUser = e => {
        e.preventDefault();
        props.logout();
    };

    // I'm going to make this responsive

    // getLinks() { // I like how they abstracted this away from the render. I'm going to do this from now on.
    //     if (this.props.loggedIn) { 
    //         return ( 
    //             <div>
    //                 <Link to="/">Explore</Link>
    //                 <Link to="/">Profile</Link>
    //                 <Link to="/">Host</Link>
    //                 <button onClick={this.logoutUser}>Logout</button>
    //             </div>
    //         )
    //     } else { 
    //         return (
    //             <div>
    //                 <Link to="/">Explore</Link>
    //                 <Link to="/login">Log In</Link>
    //                 <Link to="/signup">Sign Up</Link>
    //             </div>
    //         )
    //     }
    // }

    const slideIn = () => {
        setSlide(!slide);
    };

    const huddleUpTab = () => (
        <Link to="/" className="navbar-name">
            huddleUP
        </Link>
    );

    const myEventsTab = () => (
        <Link to={`/users/${props.id}/myevents`} className="navbar-explore-link">
            My Events
        </Link>
    );

    const exploreTab = () => (
        <Link to="/" className="navbar-explore-link">
            Explore
        </Link>
    );

    const hostTab = () => (
        <Link to="/activity/host" className="navbar-host-link">
            Host
        </Link>
    );

    const profileTab = () => (
        <Link to={`/users/${props.id}`} className="navbar-profile-link">
            Profile
        </Link>
    );

    return (
        <div className="navbar">
            <div className="left-navbar">
                {huddleUpTab()}
            </div>
            <div className="right-navbar">
                {
                slide ?
                    <div className="navbar-links slide">
                        {myEventsTab()}
                        {exploreTab()}
                        {hostTab()}
                        {profileTab()}
                    </div> :
                    <div className="navbar-links">
                        {myEventsTab()}
                        {exploreTab()}
                        {hostTab()}
                        {profileTab()}
                    </div>
                }
                {
                slide ?
                    <div className="burger cross" onClick={slideIn}>
                        <div className="burger-line-1"></div>
                        <div className="burger-line-2"></div>
                        <div className="burger-line-3"></div>
                    </div>
                    :
                    <div className="burger" onClick={slideIn}>
                        <div className="burger-line-1"></div>
                        <div className="burger-line-2"></div>
                        <div className="burger-line-3"></div>
                    </div>
                }
            </div>
        </div>
    )
}

export default NavBar;