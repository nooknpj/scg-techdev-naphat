import React, { Component } from "react";

export class MyCV extends Component {
  render() {
    return (
      <div className="cvPage">
        <div>Hi! I am Naphat. This is my web for SCG Tech Dev Assignment.</div>
        <div> You can navigate using the navigation bar to view each API.</div>
        <img
          className="cv"
          src={require("../../cv.png")}
          alt="This is my CV."
        />
      </div>
    );
  }
}
export default MyCV;
