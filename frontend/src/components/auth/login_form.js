import React from "react"; 
import { withRouter, Link } from "react-router-dom";
import "../../reset.css";
import "./auth_form.css"
import { IoIosClose } from "react-icons/io";

class LoginForm extends React.Component { 
    constructor(props) { 
        super(props) 
        this.state = {
            email: "", 
            password: "", 
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.logIntoDemoUser = this.logIntoDemoUser.bind(this);
    }

    logIntoDemoUser(e) { 
        e.preventDefault()
        this.setState({ email: "demo_user@gmail.com", password: "DemoUser" })
        setTimeout(() => this.props.login(this.state), 0)
    }

    componentDidUpdate(prevProps) { 
        if (this.props.currentUser !== prevProps.currentUser) {
            this.props.history.push('/');
        }

        if (this.props.errors !== prevProps.errors) { 
            this.setState({ errors: this.props.errors })
        }
    }

    update(field) { 
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) { 
        e.preventDefault();
        let user = { 
            email: this.state.email, 
            password: this.state.password
        }
        this.props.login(user);
    }

    renderErrors() { 
        return (
            <ul>
                { Object.keys(this.state.errors).map((error, i) => {
                    return (
                        <li key={`error-${i}`}>
                            {this.state.errors[error]}
                        </li>
                    )
                })}
            </ul>
        )
    }

    render() { 
        return (
            <div className="auth-form-page">
                <form onSubmit={this.handleSubmit} className="auth-form-container">
                    <Link to="/" className="auth-close-button"><IoIosClose /></Link>
                    <h1 className="auth-logo">huddleUP</h1>
                    <h3 className="auth-description">Log In to huddleUP</h3>
                    <p className="opposite-auth-description">Don't have a huddleUP account? <Link to="/signup" className="opposite-auth-link">Sign Up</Link></p>
                    
                    <div className="input-box-container">
                        <label className="auth-input-label">Email</label>
                        <input type="text" value={this.state.email} onChange={this.update('email')} placeholder="Email" className="input-field" />
                        {(this.state.errors.email) ? <p className="auth-errors">{this.state.errors.email}</p> : <></> }
                    </div>

                    <div className="input-box-container">
                        <label className="auth-input-label">Password</label>
                        <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" className="input-field" />
                        {(this.state.errors.password) ? <p className="auth-errors">{this.state.errors.password}</p> : <></>}
                    </div>
                    
                    <div className="login-buttons"> 
                        <input type="submit" value="LOG IN" className="submit-auth-form" />
                        <button className="submit-auth-form" onClick={this.logIntoDemoUser}>DEMO</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm)