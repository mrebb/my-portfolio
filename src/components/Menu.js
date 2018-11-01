import React from "react";
import './MenuBar.scss';

export default class Menu extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <ul>
          <li>
            <a style={{textDecoration: 'none'}}href="#about">ABOUT ME</a>
          </li>
          <li >PORTFOLIO</li>
          <li>SKILLS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    );
  }
}
