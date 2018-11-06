import React, { Fragment } from "react";
import { Container, Row, Col } from "react-grid-system";
import "./Skills.scss";
import html5Image from "../assets/html5.png";
import reactImage from "../assets/react.png";
import css3Image from "../assets/css3.png";
import javascriptImage from "../assets/javascript.png";
import jqueryImage from "../assets/jquery.png";
import mongoImage from "../assets/mongodb.png";
import githubImage from "../assets/github.png";
// import bootstrapImage from "../assets/bootstrap.png";
import herokuImage from "../assets/heroku.png";
import nodeImage from "../assets/nodejs.png";
import postgresqlImage from "../assets/postgresql.png";
import sassImage from "../assets/sass.png";
import webpackImage from "../assets/webpack.png";
// import wordpressImage from "../assets/wordpress.png";
import sqlImage from '../assets/sql.png';
import travisImage from '../assets/travis.png'
export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  render() {
    return (
      <Fragment>
        <div id="skills" className="skills">
          <h3 className="h2">skills</h3>
          <Container>
            <Row>
              <Col lg={12}>
                <div className="skill-title">HTML &#38; CSS</div>
                <div className="row-image">
                  <div className="img-with-text">
                    <img src={html5Image} alt="" />
                    <p>HTML5</p>
                  </div>
                  <div className="img-with-text">
                    <img src={css3Image} alt="" />
                    <p>CSS3</p>
                  </div>
                  <div className="img-with-text">
                    <img src={reactImage} alt="" />
                    <p>JSX</p>
                  </div>
                  <div className="img-with-text">
                    <img src={sassImage} alt="" />
                    <p className="sass">SASS</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="skill-title">JavaScript</div>
                <div className="row-image">
                  <div className="img-with-text">
                    <img src={reactImage} alt="" />
                    <p className="sass">React | React Native</p>
                  </div>
                  <div className="img-with-text">
                    <img src={javascriptImage} alt="" />
                    <p className="javascript">JavaScript</p>
                  </div>
                  <div className="img-with-text">
                    <img src={jqueryImage} alt="" />
                    <p className="sass">jQuery</p>
                  </div>
                  <div className="img-with-text">
                    <img src={nodeImage} alt="" />
                    <p className="sass">Node.js</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="skill-title">Backend</div>
                <div className="row-image">
                  <div className="img-with-text">
                    <img src={mongoImage} alt="" />
                    <p className="javascript">MongoDB</p>
                  </div>
                  <div className="img-with-text">
                    <img src={postgresqlImage} alt="" />
                    <p>PostgreSQL</p>
                  </div>
                  <div className="img-with-text">
                    <img src={sqlImage} alt="" />
                    <p className="sql">SQL</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="skill-title">Version | Build | Deploy</div>
                <div className="row-image-last">
                <div className="img-with-text">
                    <img src={githubImage} alt="" />
                    <p>Github</p>
                  </div>
                  <div className="img-with-text">
                    <img src={webpackImage} alt="" />
                    <p>Webpack</p>
                  </div>
                  <div className="img-with-text">
                    <img src={herokuImage} alt="" />
                    <p>Heroku</p>
                  </div>
                   <div className="img-with-text">
                    <img src={travisImage} alt="" />
                    <p>Travis</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
