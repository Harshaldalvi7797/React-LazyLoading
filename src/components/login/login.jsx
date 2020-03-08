import React, { Component } from "react";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "LOGIN SECTION"
    };
  }
  render() {
    return (
      <div className="container">
        <h1>{this.state.heading}</h1>
      </div>
    );
  }
}
export default Login;
