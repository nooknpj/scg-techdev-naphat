import React, { Component } from "react";
import "./styles.css";
export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerText">
          This website is a part of SCG Tech Dev Assignment.
        </div>
        <div className="footerProfile">
          Naphat Jaroensri | naphatj.work@gmail.com | 0808087036
        </div>
      </div>
    );
  }
}

export default Footer;
