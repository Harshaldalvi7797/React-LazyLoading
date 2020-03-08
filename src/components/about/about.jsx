import React, { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "ABOUT SECTION"
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
export default About;
