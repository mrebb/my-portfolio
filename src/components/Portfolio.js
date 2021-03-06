import React from "react";
import "./Portfolio.scss";
import { Container, Row, Col } from "react-grid-system";
import SocialLogo from "social-logos";
import npmImage from "../assets/npm.png";
import npmGif from "../assets/demo.gif";
import ioscodecommando from "../assets/ioscodecommando.png";
import iosGif from "../assets/ioscodecommando.gif";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      npmProject: false,
      ioscodecommando: false
    };
  }
  show = project => {
    this.setState({ [project]: true });
  };
  hide = project => {
    this.setState({ [project]: false });
  };
  render() {
    return (
      <section id="portfolio" className="portfolio-section">
        <h3 className="h2">Portfolio</h3>
        <Container>
          <Row>
            <Col md={4}>
              <div className="project-title">REACT NATIVE CLI APP</div>
              {!this.state.npmProject && (
                <img
                  style={{ width: "89%" }}
                  onMouseEnter={() => this.show("npmProject")}
                  src={npmImage}
                  alt=""
                />
              )}
              {this.state.npmProject && (
                <img
                  style={{ height: "33%" }}
                  onMouseLeave={() => this.hide("npmProject")}
                  src={npmGif}
                  alt=""
                />
              )}
              <p className="project-description">
                Developed a global installable npm package that allows any new developer to
                quickly start with boiler plate code for iOS and Android
                platforms with side-menu, authentication, redux,platform dev
                tools, connected screens and react navigation all with one
                command. Package published to npm and Yarn.
              </p>
              <div className="card-footer">
                <a
                  style={{ fontWeight: "bold", textDecoration: "none" }}
                  href="https://github.com/mrebb/react-native-redux-sidemenu-navigator-cli"
                >
                  View
                  <SocialLogo
                    style={{ textAlign: "center" }}
                    icon="github"
                    size={24}
                  />
                  Source{" "}
                </a>
              </div>
            </Col>
            <Col md={4}>
              <div className="project-title">React Native iOS</div>
              {!this.state.ioscodecommando && (
                <img
                  style={{ width: "46%" }}
                  onMouseEnter={() => this.show("ioscodecommando")}
                  src={ioscodecommando}
                  alt=""
                />
              )}
              {this.state.ioscodecommando && (
                <img
                  style={{ width: "45%" }}
                  onMouseLeave={() => this.hide("ioscodecommando")}
                  src={iosGif}
                  alt=""
                />
              )}
              <p className="project-description">
                React Native iOS application with React Native and XCode.
                Solution helps instructors to interact with Random student
                finder, github integration, student pairs generation and quiz
                modules. React Native application on Mobile provides instant
                access for instructors on need basis.
              </p>
              <div className="card-footer">
                <a
                  style={{ fontWeight: "bold", textDecoration: "none" }}
                  href="https://github.com/mrebb/iOS-CodeCommando"
                >
                  View
                  <SocialLogo
                    style={{ textAlign: "center" }}
                    icon="github"
                    size={24}
                  />
                  Source{" "}
                </a>
              </div>
            </Col>
            <Col md={4}>
              <div className="project-title">Code Commando</div>
              <img
                style={{ width: "69%" }}
                src="https://github.com/mrebb/my-portfolio/blob/master/src/assets/codecommando.png?raw=true"
                alt=""
              />
              <p className="project-description">
                Full stack React and Electron frontend applications with Express
                Middleware &#38; Node JS as server. Solution helps instructors
                to interact with compile code, save to github using backend API
                and return output using Monaco code compiling interface.
                Additional modules include Random student finder, github
                integration, student pairs generation and quiz modules.{" "}
              </p>
              <div className="card-footer">
                <a
                  style={{ fontWeight: "bold", textDecoration: "none" }}
                  href="https://github.com/code-commando"
                >
                  View
                  <SocialLogo
                    style={{ textAlign: "center" }}
                    icon="github"
                    size={24}
                  />
                  Source{" "}
                </a>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "5%" }}>
            <Col md={4}>
              <div className="project-title">Zero Waste Washington</div>
              <img
                style={{ width: "46%" }}
                src="https://github.com/mrebb/my-portfolio/blob/master/src/assets/zww.png?raw=true"
                alt=""
              />
              <p className="project-description">
                React redux Full stack application that makes on-field team and
                volunteers to collect litter and report to agency on various
                details of the visited site.{" "}
              </p>
              <div className="card-footer">
                <a
                  style={{ fontWeight: "bold", textDecoration: "none" }}
                  href="https://github.com/SeattleGiveCamp/SGC2018_etap-service"
                >
                  View
                  <SocialLogo
                    style={{ textAlign: "center" }}
                    icon="github"
                    size={24}
                  />
                  Source{" "}
                </a>
              </div>
            </Col>
            <Col md={4}>
              <div className="project-title">Image Journal</div>
              <img
                style={{ width: "51%" }}
                src="https://github.com/mrebb/my-portfolio/blob/master/src/assets/imagejournal.jpg?raw=true"
                alt=""
              />
              <p className="project-description">
                Converted Wordpress website to iOS and Android using PWA
                (Progressive Web App). Wordpress site is converted to iOS and
                Android apps with in very short time using PWA builder
                mechanism.
              </p>
              <div className="card-footer">
                <a
                  style={{ fontWeight: "bold", textDecoration: "none" }}
                  href="https://github.com/SeattleGiveCamp/SGC2018_ImageJournal"
                >
                  View
                  <SocialLogo
                    style={{ textAlign: "center" }}
                    icon="github"
                    size={24}
                  />
                  Source{" "}
                </a>
              </div>
            </Col>
            <Col md={4}>
              <div className="project-title">Bit Fellows</div>
              <img
                style={{ height: "32%" }}
                src={
                  "https://github.com/mrebb/my-portfolio/blob/master/src/assets/bitfellows.png?raw=true"
                }
                alt=""
              />
              <p className="project-description">
                Built a Full Stack javascript application using Node.JS,
                Page.JS, Chart.js, HTML &#38; CSS. Solution provides a way to
                search cryptocurrency coins and collect the historical data by
                making API calls to 3rd Party bitcoin exchange. Solution also
                records user interactions on coin search trends that can be
                further fed to Bitcoin sellers in the market.{" "}
              </p>
              <div className="card-footer">
                <a
                  style={{ fontWeight: "bold", textDecoration: "none" }}
                  href="https://github.com/Bitfellows"
                >
                  View
                  <SocialLogo
                    style={{ textAlign: "center" }}
                    icon="github"
                    size={24}
                  />
                  Source{" "}
                </a>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "5%" }}>
            <Col md={4}>
              <div className="project-title">
                Microsoft Corporate, External, &#38; Legal Affairs (CELA)
              </div>
              <img
                src={
                  "https://github.com/mrebb/my-portfolio/blob/master/src/assets/cela.png?raw=true"
                }
                alt=""
              />
              <p className="project-description">
              Developed Node.js applications on IoT platform and proof of working solutions using Express.js,PostgreSQL and MongoDB to generate evidences and document the infringement analysis for Microsoft patents by using reverse engineering tools and techniques. Being a technical lead, analyzed Android source code and responded to technical queries from law firms during patent litigation and interacted with legal councils by providing adequate evidence of usage found in competitor’s software products.
              </p>
              <div className="card-footer">
                <a
                  style={{ fontWeight: "bold", textDecoration: "none" }}
                  href="https://www.microsoft.com/en-us/legal/diversity/ourworkincela"
                >
                  View Source{" "}
                </a>
              </div>
            </Col>
            <Col md={4}>
              <div className="project-title">
                Supply chain management &#38; Bing AdCenter BI &#38; JAZZ
              </div>
              <img
                style={{ width: "90%", height: "29.5%" }}
                src="https://github.com/mrebb/my-portfolio/blob/master/src/assets/crm.jpg?raw=true"
                alt=""
              />
              <p className="project-description">
                Automated solution for the Hardware Procurement Process that
                uses Microsoft Dynamics AX as base platform. Worked as SDET,
                offshore QA Lead for Microsoft Dynamics CRM project that allows
                partners to create Bing Ads that goes through a business flow
                using SQL Server SSIS jobs and then data gets loaded to
                Microsoft Dynamic CRM for Sales module.
              </p>
              <div className="card-footer">
                <a
                  style={{ fontWeight: "bold", textDecoration: "none" }}
                  href="https://dynamics.microsoft.com/en-us/"
                >
                  View Source{" "}
                </a>
              </div>
            </Col>
            <Col md={4}>
              <div style={{}} className="project-title">
                SingleView billing system(Telecom)
              </div>
              <img
                style={{ width: "90%", height: "37.5%" }}
                src="https://github.com/mrebb/my-portfolio/blob/master/src/assets/mtnl.png?raw=true"
                alt=""
              />
              <p className="project-description">
                MTNL is Telecom Service Provider, operating its Wireline &#38;
                Wireless businesses from Delhi &#38; Mumbai in India, providing
                a wide spectrum of voice &#38; data related services to its
                customers using different OSS/BSS systems. Worked as a QA for
                peoplesoft CRM, billing systems and also worked as UAT tester
                onsite.
              </p>
              <div className="card-footer">
                <a
                  style={{ fontWeight: "bold", textDecoration: "none" }}
                  href="https://github.com/mrebb/react-native-redux-sidemenu-navigator-cli"
                >
                  View Source{" "}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
