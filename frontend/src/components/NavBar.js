import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <Link className="link" to="/MyCV">
              <li class="nav-item">
                <a class="nav-link" href="/MyCV">
                  My CV
                </a>
              </li>
            </Link>
            <Link className="link" to="/FindXYZ">
              <li class="nav-item">
                <a class="nav-link" href="/FindXYZ">
                  Find X,Y,Z
                </a>
              </li>
            </Link>
            <Link className="link" to="/FindBC">
              <li class="nav-item">
                <a class="nav-link" href="/FindBC">
                  Find B,C
                </a>
              </li>
            </Link>
            <Link className="link" to="/Direction">
              <li class="nav-item">
                <a class="nav-link" href="/Direction">
                  Direction to Central World
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
