import React, { Component } from "react";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "HOME SECTION"
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
export default Home;
