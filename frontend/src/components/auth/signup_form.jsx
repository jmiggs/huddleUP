import React from "react";
import { withRouter, Link } from "react-router-dom";
import "../../reset.css";
import "./auth_form.css";
import { IoIosClose } from "react-icons/io";

class SignupForm extends React.Component {
    constructor(props) { 
        super(props) 
        this.state = {
            email: "", 
            username: "", 
            password: "", 
            password2: "", 
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.clearedErrors = false;
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.signedIn === true) {
    //         this.props.history.push('/login');
    //     }

    //     this.setState({ errors: nextProps.errors })
    // }

    componentDidUpdate(prevProps) {
        if (this.props.signedIn !== prevProps.signedIn) {
            this.props.history.push('/login');
            // let user = { email: this.state.email, username: this.state.username }
            // this.props.login(user)
        }

        if (this.props.errors !== prevProps.errors) {
            this.setState({ errors: this.props.errors })
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history)
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="auth-form-page">
                <form onSubmit={this.handleSubmit} className="auth-form-container">
                    <Link to="/" className="auth-close-button"><IoIosClose /></Link>
                    <h1 className="auth-logo">huddleUP</h1>
                    <h3 className="auth-description">Sign Up for huddleUP</h3>
                    <p className="opposite-auth-description">Already have an account? <Link to="/login" className="opposite-auth-link">Log In</Link></p>
                    
                    <div className="input-box-container">
                        <label className="auth-input-label">Email</label>
                        <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email" className="input-field" />
                        { (this.state.errors.email) ? <p className="auth-errors">{this.state.errors.email}</p> : <></> }
                    </div>
                    
                    <div className="input-box-container">
                        <label className="auth-input-label">Username</label>
                        <input type="text" value={this.state.username} onChange={this.update('username')} placeholder="Username" className="input-field" />
                        {(this.state.errors.username) ? <p className="auth-errors">{this.state.errors.username}</p> : <></>}
                    </div>
                    
                    <div className="input-box-container">
                        <label className="auth-input-label">Password</label>
                        <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" className="input-field" />
                        {(this.state.errors.password) ? <p className="auth-errors">{this.state.errors.password}</p> : <></>}
                    </div>
                    
                    <div className="input-box-container">
                        <label className="auth-input-label">Confirm Password</label>
                        <input type="password" value={this.state.password2} onChange={this.update('password2')} placeholder="Confirm Password" className="input-field" />
                        {(this.state.errors.password2) ? <p className="auth-errors">{this.state.errors.password2}</p> : <></>}
                    </div>
                    
                    <input type="submit" value="SIGN UP" className="submit-auth-form" />
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);



// import React, { useState, useEffect } from "react";
// import { withRouter, Link } from "react-router-dom";
// import "../../reset.css";
// import "./auth_form.css";
// import { IoIosClose } from "react-icons/io";

// const SignupForm = props => {
//     const [email, setEmail] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [password2, setPassword2] = useState("");
//     const [errors, setErrors] = useState({});

//     useEffect(() => { // This always activated. Idk why 
//         props.history.push('/login');
//     }, [props.signedIn]);

//     useEffect(() => {
//         setErrors(props.errors);
//     }, [props.errors]);


//     const handleSubmit = e => {
//         e.preventDefault();
//         let user = {
//             email,
//             username,
//             password,
//             password2
//         };

//         props.signup(user, props.history);
//     };
           
//     return (
//         <div className="auth-form-page">
//             <form onSubmit={handleSubmit} className="auth-form-container">
//                 <Link to="/" className="auth-close-button"><IoIosClose /></Link>
//                 <h1 className="auth-logo">huddleUP</h1>
//                 <h3 className="auth-description">Sign Up for huddleUP</h3>
//                 <p className="opposite-auth-description">Already have an account? <Link to="/login" className="opposite-auth-link">Log In</Link></p>

//                 <div className="input-box-container">
//                     <label className="auth-input-label">Email</label>
//                     <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} placeholder="Email" className="input-field" />
//                     {(errors.email) ? <p className="auth-errors">{errors.email}</p> : <></>}
//                 </div>

//                 <div className="input-box-container">
//                     <label className="auth-input-label">Username</label>
//                     <input type="text" value={username} onChange={e => setUsername(e.currentTarget.value)} placeholder="Username" className="input-field" />
//                     {(errors.username) ? <p className="auth-errors">{errors.username}</p> : <></>}
//                 </div>

//                 <div className="input-box-container">
//                     <label className="auth-input-label">Password</label>
//                     <input type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} placeholder="Password" className="input-field" />
//                     {(errors.password) ? <p className="auth-errors">{errors.password}</p> : <></>}
//                 </div>

//                 <div className="input-box-container">
//                     <label className="auth-input-label">Confirm Password</label>
//                     <input type="password" value={password2} onChange={e => setPassword2(e.currentTarget.value)} placeholder="Confirm Password" className="input-field" />
//                     {(errors.password2) ? <p className="auth-errors">{errors.password2}</p> : <></>}
//                 </div>

//                 <input type="submit" value="SIGN UP" className="submit-auth-form" />
//             </form>
//         </div>
//     );
// };

// export default withRouter(SignupForm);
