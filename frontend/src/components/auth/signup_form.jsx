import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import "../../reset.css";
import "./auth_form.css";
import { IoIosClose } from "react-icons/io";

const SignupForm = props => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({});
    const [mounted, setMounted] = useState(false);

    useEffect(() => { 
        if (!mounted) setMounted(true);
        if (mounted) props.history.push('/login');
    }, [props.signedIn]);

    useEffect(() => {
        setErrors(props.errors);
    }, [props.errors]);


    const handleSubmit = e => {
        e.preventDefault();
        let user = {
            email,
            username,
            password,
            password2
        };

        props.signup(user, props.history);
    };
           
    return (
        <div className="auth-form-page">
            <form onSubmit={handleSubmit} className="auth-form-container">
                <Link to="/" className="auth-close-button"><IoIosClose /></Link>
                <h1 className="auth-logo">huddleUP</h1>
                <h3 className="auth-description">Sign Up for huddleUP</h3>
                <p className="opposite-auth-description">Already have an account? <Link to="/login" className="opposite-auth-link">Log In</Link></p>

                <div className="input-box-container">
                    <label className="auth-input-label">Email</label>
                    <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} className="input-field" />
                    {(errors.email) ? <p className="auth-errors">{errors.email}</p> : <></>}
                </div>

                <div className="input-box-container">
                    <label className="auth-input-label">Username</label>
                    <input type="text" value={username} onChange={e => setUsername(e.currentTarget.value)} className="input-field" />
                    {(errors.username) ? <p className="auth-errors">{errors.username}</p> : <></>}
                </div>

                <div className="input-box-container">
                    <label className="auth-input-label">Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} className="input-field" />
                    {(errors.password) ? <p className="auth-errors">{errors.password}</p> : <></>}
                </div>

                <div className="input-box-container">
                    <label className="auth-input-label">Confirm Password</label>
                    <input type="password" value={password2} onChange={e => setPassword2(e.currentTarget.value)} className="input-field" />
                    {(errors.password2) ? <p className="auth-errors">{errors.password2}</p> : <></>}
                </div>

                <input type="submit" value="SIGN UP" className="submit-auth-form" />
            </form>
        </div>
    );
};

export default withRouter(SignupForm);
