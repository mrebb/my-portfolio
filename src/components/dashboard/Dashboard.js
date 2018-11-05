import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import Header from '../Header.js'
import AboutMe from '../AboutMe.js'
import Portfolio from '../Portfolio.js'
import Skills from '../Skills.js';
import { bubble as MenuBar } from 'react-burger-menu'
class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      menuOpen:false
    }
  }
  handleStateChange=(state)=>{
    this.setState({menuOpen: state.isOpen}) 
  }

  handleClose=()=>{
  this.setState({menuOpen:false})
  }
  render() {
    return (
      <Fragment>
      <MenuBar isOpen={this.state.menuOpen} onStateChange={(state)=>this.handleStateChange(state.isOpen)} id={ "sidebar" } className={ "my-menu" } right width={ '55%' }>
        <a onClick={()=>this.handleClose()} className="menu-item" href="#home">Home</a>
        <a onClick={()=>this.handleClose()} className="menu-item" href="#about">About</a>
        <a onClick={()=>this.handleClose()} className="menu-item" href="#portfolio">Portfolio</a>
        <a onClick={()=>this.handleClose()} className="menu-item" href="#skills">Skills</a>
      </MenuBar>
     <Header/>  
     <AboutMe/>
     <Portfolio/>
     <Skills/>
     </Fragment>
    );
  }
}


const dispatchStateToProps = state => ({ state });

export default connect(dispatchStateToProps, null)(Dashboard)
