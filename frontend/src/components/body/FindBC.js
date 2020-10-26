import React, { Component } from "react";

export class FindBC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      b: undefined,
      c: undefined,
    };
  }

  async componentDidMount() {
    const response = await fetch("/findBC");
    const data = await response.json();
    this.setState({
      b: data.b,
      c: data.c,
    });
  }

  render() {
    let { b, c } = this.state;

    const answerContainer = (
      <div>
        <div>B = {b}</div>
        <div>C = {c}</div>
      </div>
    );

    return (
      <div>
        <div className="bodyHeader"> Find B,C </div>
        <div className="instruction">
          <div>If A = 21, A + B = 23, A + C = -21</div>
          <div>Please create a new function for finding B and C value</div>
        </div>
        {/* check if b and c has been updated */}
        {!(!b && !c) ? answerContainer : <div> loading... </div>}
      </div>
    );
  }
}

export default FindBC;
