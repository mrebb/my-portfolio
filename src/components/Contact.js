import React, { Fragment } from "react";
import "./Contact.scss";
import SocialLogo from "social-logos";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  render() {
    return (
      <Fragment>
        <div id="contact" className="contact">
          <h3 className="h2">contact</h3>
          <p><a
            className="btn-floating brown"
            style={{ padding: "5px", color: "white" }}
            href="mailto:madhurebbana@gmail.com"
          >
            <SocialLogo icon="mail" size={36} />
          </a><a
            style={{ color: "black",textDecoration:'none' }}
            href="mailto:madhurebbana@gmail.com"
          >madhurebbana@gmail.com
          </a>
          </p>
          <p> <a className="btn-floating brown"
            style={{ padding: "5px", color: "white" }}
            href="https://www.linkedin.com/in/madhurebbana/"
          >
            <SocialLogo icon="linkedin" size={36} />
          </a><a
            style={{ color: "black",textDecoration:'none' }}
            href="https://www.linkedin.com/in/madhurebbana/"
          >linkedin.com/in/madhurebbana/
          </a>
         </p>
         <p className="last-anchor"> <a className="btn-floating brown" style={{ padding: "5px" }} href="https://github.com/mrebb">
            <SocialLogo icon="github" size={36} />
          </a><a 
            style={{ color: "black",textDecoration:'none' }}
            href="https://github.com/mrebb"
          >github.com/mrebb
          </a></p>
        </div>
      </Fragment>
    );
  }
}
