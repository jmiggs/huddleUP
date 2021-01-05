import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import "../../reset.css";
import "./auth_form.css"
import { IoIosClose } from "react-icons/io";

const LoginForm = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [mounted, setMounted] = useState(false);

    useEffect(() => { 
        if (!mounted) setMounted(true);
        if (mounted) props.history.push("/");
    }, [props.currentUser]);

    useEffect(() => {
        setErrors(props.errors);
    }, [props.errors]);

    const demoLogin = () => { 
        setEmail("demo_user@gmail.com");
        setPassword("DemoUser");
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        let user = {
            email, 
            password
        };
        props.login(user);
    };

    return (
        <div className="auth-form-page">
            <form onSubmit={handleSubmit} className="auth-form-container">
                <Link to="/" className="auth-close-button"><IoIosClose /></Link>
                <h1 className="auth-logo">huddleUP</h1>
                <h3 className="auth-description">Log In to huddleUP</h3>
                <p className="opposite-auth-description">Don't have a huddleUP account? <Link to="/signup" className="opposite-auth-link">Sign Up</Link></p>

                <div className="input-box-container">
                    <label className="auth-input-label">Email</label>
                    <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} className="input-field" />
                    {(errors.email) ? <p className="auth-errors">{errors.email}</p> : <></>}
                </div>

                <div className="input-box-container">
                    <label className="auth-input-label">Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} className="input-field" />
                    {(errors.password) ? <p className="auth-errors">{errors.password}</p> : <></>}
                </div>

                <div className="login-buttons">
                    <input type="submit" value="LOG IN" className="submit-auth-form" />
                    <button className="submit-auth-form" onClick={demoLogin}>DEMO</button>
                </div>
            </form>
        </div>
    )
};

export default withRouter(LoginForm);