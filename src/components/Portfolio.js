import React from 'react'
import './Portfolio.scss';
import { Container, Row, Col } from 'react-grid-system';
const defaultImage= 'https://github.com/mrebb/my-portfolio/blob/master/src/assets/project-1.png?raw=true';
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
    <img src={'https://github.com/mrebb/my-portfolio/blob/master/src/assets/npm.png?raw=true'} alt="" />
      <p className="project-description">This will allow any new developer to quickly start with boiler plate code for iOS and Android platforms with side-menu, authentication, redux, screens and react navigation all with one command. </p>
    </Col>
    <Col md={4}>
      <div className="project-title">React Native iOS</div>
      <img style={{width: '50%'}} onMouseEnter={this.show}
    onMouseLeave={this.hide} src={this.state.image} alt="" />
      <p className="project-description">React Native iOS application with React Native and XCode. Solution helps instructors to interact with Random student finder, github integration, student pairs generation and quiz modules. React Native application on Mobile provides instant access for instructors on need basis.</p>
    </Col>
    <Col md={4}>
      <div className="project-title">Code Commando</div>
      <img style={{width: '50%'}} src={this.state.image} alt="" />
      <p className="project-description">Full stack React and Electron frontend applications with Express Middleware &#38; Node JS as server. Solution helps instructors to interact with compile code, save to github using backend API and return output using Monaco code compiling interface. Additional modules include Random student finder, github integration, student pairs generation and quiz modules. </p>
    </Col>
  </Row>
  <Row style={{marginTop:'5%'}}>
    <Col md={4}>
    <div className="project-title">Zero Waste Washington</div>
    <img style={{width: '50%'}} src={this.state.image} alt="" />
      <p className="project-description">Full-stack react redux application that makes on-field team and volunteers to collect litter and report to agency on various details of the visited site. </p>
    </Col>
    <Col md={4}>
       <div className="project-title">Image Journal</div>
      <img  style={{width: '50%'}} src={this.state.image} alt="" />
      <p className="project-description">Converted Wordpress website to iOS and Android using PWA(progressive web app)</p>
    </Col>
    <Col md={4}>
    <div className="project-title">Bit Fellows</div>
    <img src={'https://github.com/mrebb/my-portfolio/blob/master/src/assets/bitfellows.png?raw=true'} alt="" />
      <p className="project-description">Built a full-stack javascript application using Node.JS, Page.JS, HTML &#38; CSS. Solution provides a way to search cryptocurrency coins and collect the historical data by making API calls to 3rd Party bitcoin exchange</p>
    </Col>
  </Row>
  <Row style={{marginTop:'5%'}}>
    <Col md={4}>
      <div className="project-title">Microsoft Corporate, External, &#38; Legal Affairs (CELA)</div>
      <img src={'https://github.com/mrebb/my-portfolio/blob/master/src/assets/cela.png?raw=true'} alt="" />
      <p className="project-description">Android source code analysis &#38; developing POC’s  to generate evidences and document the infringement analysis for Microsoft patents by using reverse engineering tools and techniques. Being a technical lead, responded to technical queries from law firms during patent litigation and interacted with legal councils by providing adequate evidence of usage found in competitor’s software products.</p>
    </Col>
    <Col md={4}>
      <div className="project-title">Supply chain management &#38; Bing AdCenter BI &#38; JAZZ</div>
      <img style={{width: '50%'}} src={this.state.image} alt="" />
      <p className="project-description">Automated solution for the Hardware Procurement Process that uses Microsoft Dynamics AX as base platform. Also worked on Microsoft Dynamics CRM &#38; SQL Server SSIS jobs.</p>
    </Col>
    <Col md={4}>
       <div className="project-title">SingleView billing system(Telecom)</div>
      <img style={{width: '50%'}} src={this.state.image} alt="" />
      <p className="project-description">MTNL is Telecom Service Provider, operating its Wireline &#38; Wireless businesses from Delhi &#38; Mumbai in India, providing a wide spectrum of voice &#38; data related services to its customers using different OSS/BSS systems</p>
    </Col>
  </Row>
</Container>
  </section>
);
}
}
