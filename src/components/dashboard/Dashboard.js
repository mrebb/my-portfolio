import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './Dashboard.scss';
import Header from '../Header.js'
import AboutMe from '../AboutMe.js'
import Portfolio from '../Portfolio.js'
import { bubble as MenuBar } from 'react-burger-menu'
class Dashboard extends Component {
  render() {
    return (
      <Fragment>
      <MenuBar id={ "sidebar" } className={ "my-menu" } right width={ '55%' }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="aboutme" className="menu-item" href="#about">About</a>
        <a id="portfolio-copy" className="menu-item" href="#portfolio">Portfolio</a>
      </MenuBar>
     <Header/>  
     <AboutMe/>
     <Portfolio/>
     </Fragment>
    );
  }
}


const dispatchStateToProps = state => ({ state });

export default connect(dispatchStateToProps, null)(Dashboard)
