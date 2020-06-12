import React, { Component } from 'react';
import { signIn } from './../../../services/authentication';
import './style.scss';

class AuthenticationSignInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    signIn({ email, password })
      .then((user) => {
        this.props.updateUser(user);
        // Redirect user to home page after successful sign in
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission} className="signForm">
          <label htmlFor="email-input" className="emailTitle">
            Email
          </label>
          <input
            className="emailInput"
            id="email-input"
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <label htmlFor="password-input" className="passTitle">
            Password
          </label>
          <input
            className="passInput"
            id="password-input"
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />

          <button className="signIn">Sign In</button>
        </form>
      </div>
    );
  }
}

export default AuthenticationSignInView;
