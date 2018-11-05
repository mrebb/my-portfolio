import React,{Fragment} from "react";

import './MenuBar.scss';

export default class Skills extends React.Component {
    constructor(props){
        super(props);
        this.state={
            clicked:false
        }
    }
    
  render() {
    return (
        <Fragment>
      <div id="skills"className="skills">
        
      </div>
      </Fragment>
    );
  }
}
