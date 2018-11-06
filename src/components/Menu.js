import React,{Fragment} from "react";

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
        <Fragment>
      <div className="nav-bar">
        <ul>
          <li>
            <a style={{textDecoration: 'none'}}href="#about">ABOUT</a>
          </li>
          <li><a style={{textDecoration: 'none'}}href="#portfolio">PORTFOLIO</a></li>
          <li><a style={{textDecoration: 'none'}}href="#skills">SKILLS</a></li>
           <li><a style={{textDecoration: 'none'}}href="#education">EDUCATION</a></li>
           <li><a style={{textDecoration: 'none'}}href="#contact">CONTACT</a></li>
         
        </ul>
      </div>
      </Fragment>
    );
  }
}
