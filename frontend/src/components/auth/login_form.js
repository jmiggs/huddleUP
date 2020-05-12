import React from "react"; 
import { withRouter } from "react-router-dom";

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
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/tweets');
        }

        // Set or clear errors
        this.setState({ errors: nextProps.errors })
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" onChange={this.update("email")} value={this.state.email} placeholder="Email" />
                        <br />
                        <input type="password" onChange={this.update("password")} value={this.state.password} placeholder="Password" />
                        <br />
                        <input type="submit" value="Submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm)