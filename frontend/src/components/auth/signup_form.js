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
        if (this.props.currentUser !== prevProps.currentUser) {
            this.props.history.push('/login');
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

        this.props.signup(user, this.props.history);
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
                {/* <div className="auth-form-container"> */}
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
                        {/* {this.renderErrors()} */}
                    </form>
                {/* </div> */}
            </div>
        );
    }
}

export default withRouter(SignupForm);
