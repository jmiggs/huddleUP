// import React from "react"; 
// import { withRouter, Link } from "react-router-dom";
// import "../../reset.css";
// import "./auth_form.css"
// import { IoIosClose } from "react-icons/io";

// class LoginForm extends React.Component { 
//     constructor(props) { 
//         super(props) 
//         this.state = {
//             email: "", 
//             password: "", 
//             errors: {}
//         }

//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.renderErrors = this.renderErrors.bind(this);
//         this.logIntoDemoUser = this.logIntoDemoUser.bind(this);
//     }

//     logIntoDemoUser(e) { 
//         e.preventDefault()
//         this.setState({ email: "demo_user@gmail.com", password: "DemoUser" })
//         setTimeout(() => this.props.login(this.state), 0)
//     }

//     componentDidUpdate(prevProps) { 
//         if (this.props.currentUser !== prevProps.currentUser) {
//             this.props.history.push('/');
//         }

//         if (this.props.errors !== prevProps.errors) { 
//             this.setState({ errors: this.props.errors })
//         }
//     }

//     update(field) { 
//         return e => {
//             this.setState({ [field]: e.currentTarget.value })
//         }
//     }

//     handleSubmit(e) { 
//         e.preventDefault();
//         let user = { 
//             email: this.state.email, 
//             password: this.state.password
//         }
//         this.props.login(user);
//     }

//     renderErrors() { 
//         return (
//             <ul>
//                 { Object.keys(this.state.errors).map((error, i) => {
//                     return (
//                         <li key={`error-${i}`}>
//                             {this.state.errors[error]}
//                         </li>
//                     )
//                 })}
//             </ul>
//         )
//     }

//     render() { 
//         return (
//             <div className="auth-form-page">
//                 <form onSubmit={this.handleSubmit} className="auth-form-container">
//                     <Link to="/" className="auth-close-button"><IoIosClose /></Link>
//                     <h1 className="auth-logo">huddleUP</h1>
//                     <h3 className="auth-description">Log In to huddleUP</h3>
//                     <p className="opposite-auth-description">Don't have a huddleUP account? <Link to="/signup" className="opposite-auth-link">Sign Up</Link></p>
                    
//                     <div className="input-box-container">
//                         <label className="auth-input-label">Email</label>
//                         <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email" className="input-field" />
//                         {(this.state.errors.email) ? <p className="auth-errors">{this.state.errors.email}</p> : <></> }
//                     </div>

//                     <div className="input-box-container">
//                         <label className="auth-input-label">Password</label>
//                         <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" className="input-field" />
//                         {(this.state.errors.password) ? <p className="auth-errors">{this.state.errors.password}</p> : <></>}
//                     </div>
                    
//                     <div className="login-buttons"> 
//                         <input type="submit" value="LOG IN" className="submit-auth-form" />
//                         <button className="submit-auth-form" onClick={this.logIntoDemoUser}>DEMO</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default withRouter(LoginForm)





import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import "../../reset.css";
import "./auth_form.css"
import { IoIosClose } from "react-icons/io";

const LoginForm = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const logIntoDemoUser = e => {
        e.preventDefault()
        setEmail("demo_user@gmail.com");
        setPassword("DemoUser");
        setTimeout(() => props.login({ email, password }), 0);
    };

    useEffect(() => { // This one always activates too.
        props.history.push("/");
    }, [props.currentUser]);

    useEffect(() => {
        setErrors(props.errors);
    }, [props.errors]);
    
    const handleSubmit = e => {
        e.preventDefault();
        let user = {
            email, 
            password
        };
        props.login(user);
    };

    const renderErrors = () => (
        <ul>
            { Object.keys(errors).map((error, i) => {
                return (
                    <li key={`error-${i}`}>
                        {errors[error]}
                    </li>
                )
            })}
        </ul>
    );

    return (
        <div className="auth-form-page">
            <form onSubmit={handleSubmit} className="auth-form-container">
                <Link to="/" className="auth-close-button"><IoIosClose /></Link>
                <h1 className="auth-logo">huddleUP</h1>
                <h3 className="auth-description">Log In to huddleUP</h3>
                <p className="opposite-auth-description">Don't have a huddleUP account? <Link to="/signup" className="opposite-auth-link">Sign Up</Link></p>

                <div className="input-box-container">
                    <label className="auth-input-label">Email</label>
                    <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} placeholder="Email" className="input-field" />
                    {(errors.email) ? <p className="auth-errors">{errors.email}</p> : <></>}
                </div>

                <div className="input-box-container">
                    <label className="auth-input-label">Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} placeholder="Password" className="input-field" />
                    {(errors.password) ? <p className="auth-errors">{errors.password}</p> : <></>}
                </div>

                <div className="login-buttons">
                    <input type="submit" value="LOG IN" className="submit-auth-form" />
                    <button className="submit-auth-form" onClick={logIntoDemoUser}>DEMO</button>
                </div>
            </form>
        </div>
    )
};

export default withRouter(LoginForm);