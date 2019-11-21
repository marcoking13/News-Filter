import React from "react";

import Disc from "./../../images/beats.png";
import "./../../css/landing.css";

class AmbientShowcase extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="container-fluid h200px">
          <div className="row">
            <div className="col-6 BWRR">
              <div className="row">
                  <div className="col-3"/>
                  <div className="col-4">
                    <div className="w100">
                      <img src = {Disc} className="w100" />
                    </div>
                  </div>
                  <div className="col-3"/>
              </div>
            </div>
            <div className="col-6">
                <h4 className="text-center mt15 cw">Calm Yourself with Ambient Beats! </h4>
            </div>
          </div>

      </div>
    )
  }
}


export default AmbientShowcase;
