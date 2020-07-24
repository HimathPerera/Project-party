import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";
import { Redirect } from "react-router-dom";
import firebase from "firebase";

class SignedIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  handleClick = (e) => {
    e.preventDefault(e);
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">LogIn</h5>
          <div className="input-field">
            <label htmlFor="email">email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="center red-text">
            {authError ? <p>{authError}</p> : null}
          </div>
          <button className="btn pink lighten-1 z-depth-0">Login</button>
          <button
            className="btn pink lighten-1 z-depth-0"
            id="google"
            onClick={this.handleClick}
          >
            <i class="fa fa-google fa-fw"></i>
            Log in with Google
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    authError: state.auth.authErrorLogin,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedIn);
