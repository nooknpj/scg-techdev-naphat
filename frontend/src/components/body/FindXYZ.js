import React, { Component } from "react";

export class FindXYZ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: undefined,
      y: undefined,
      z: undefined,
    };
  }

  async componentDidMount() {
    const response = await fetch("/findXYZ");
    const data = await response.json();
    this.setState({
      x: data.x,
      y: data.y,
      z: data.z,
    });
  }

  render() {
    let { x, y, z } = this.state;

    const answerContainer = (
      <div>
        <div>X = {x}</div>
        <div>Y = {y}</div>
        <div>Z = {z} </div>
        <div>
          <div style={{ marginTop: "8px" }}>Full Pattern</div>
          {x}, {y}, 5, 9, 15, 23, {z}
        </div>
      </div>
    );

    return (
      <div>
        <div>
          <div className="bodyHeader"> Find X,Y,Z </div>
          <div className="instruction">
            <div>Please create a new function for finding X, Y, Z value</div>
            <div>X, Y, 5, 9, 15, 23, Z </div>
          </div>
          {/* check if x,y,z has been updated */}
          {!(!x && !y && !z) ? answerContainer : <div> loading... </div>}
        </div>
      </div>
    );
  }
}

export default FindXYZ;
