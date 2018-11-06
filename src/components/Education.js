import React, { Fragment } from "react";
import { Container, Row, Col } from "react-grid-system";
import "./Education.scss";

export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  render() {
    return (
      <Fragment>
        <div id="education" className="education">
          <h3 className="h2">education</h3>
          <Container>
            <Row>
              <Col lg={12}>
                <div className="education-title">Jawaharlal Nehru Technological University</div>
                  <div className="education-text">
                  <p className="degree-text">Bachelor of Technology in Electrical &#38; Electronics Engineering</p>
                  <p className="brown-text">Hyderabad, India</p>
                  </div>
               
              </Col>
            </Row>
            
          </Container>
        </div>
      </Fragment>
    );
  }
}
