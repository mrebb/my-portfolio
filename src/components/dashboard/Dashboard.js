import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Header.js'
import AboutMe from '../AboutMe.js'
import Portfolio from '../Portfolio.js'
class Dashboard extends Component {
  render() {
    return (
      <Fragment>
     <Header/>
     <AboutMe/>
     <Portfolio/>
     </Fragment>
    );
  }
}


const dispatchStateToProps = state => ({ state });

export default connect(dispatchStateToProps, null)(Dashboard)
