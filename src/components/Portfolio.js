import React from 'react'
import './Portfolio.scss';
import { Container, Row, Col } from 'react-grid-system';
const defaultImage= 'https://github.com/mrebb/my-portfolio/blob/master/src/assets/brand-logo.png?raw=true';
export default class AboutMe extends React.Component{
  constructor(props){
    super(props)
    this.state={
      image:defaultImage
    }
  }
  show=()=>{
    this.setState({image:'https://github.com/mrebb/react-native-redux-sidemenu-navigator-cli/blob/master/templates/react-native-template/assets/demo.gif?raw=true'})
  }
  hide=()=>{
this.setState({image:defaultImage})
  }
render(){
return (
  <section id="portfolio" className ="portfolio-section">
    <h3 className="h2">Portfolio</h3>
<Container>
  <Row>
    <Col md={4}>
    <div className="project-title">REACT NATIVE CLI APP</div>
    <img onMouseEnter={this.show}
    onMouseLeave={this.hide} src={this.state.image} alt="" />
      <p className="project-description">This will allow any new developer to quickly start with boiler plate code for iOS and Android platforms with side-menu, authentication, redux, screens and react navigation all with one command. </p>
    </Col>
    <Col md={4}>
      React Native iOS
    </Col>
    <Col md={4}>
      Code Commando
    </Col>
  </Row>
  <Row style={{marginTop:'5%'}}>
    <Col md={4}>
    <div className="project-title">Bit Fellows</div>
    <img onMouseEnter={this.show}
    onMouseLeave={this.hide} src={this.state.image} alt="" />
      <p className="project-description">Built a full-stack javascript application using Node.JS, Page.JS, HTML &#38; CSS. Solution provides a way to search cryptocurrency coins and collect the historical data by making API calls to 3rd Party bitcoin exchange</p>
    </Col>
    <Col md={4}>
      Microsoft Corporate, External, &#38; Legal Affairs (CELA) 
    </Col>
    <Col md={4}>
      Supply chain management &#38; Bing AdCenter BI &#38; JAZZ
    </Col>
  </Row>
</Container>
  </section>
);
}
}
