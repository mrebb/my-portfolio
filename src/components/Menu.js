import React from "react";
import './MenuBar.scss';

export default class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            clicked:false
        }
    }
    
  render() {
    return (
      <div className="nav-bar">
        <ul>
          <li>
            <a style={{textDecoration: 'none'}}href="#about">ABOUT ME</a>
          </li>
          <li><a style={{textDecoration: 'none'}}href="#portfolio">PORTFOLIO</a></li>
          <li>SKILLS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    );
  }
}
