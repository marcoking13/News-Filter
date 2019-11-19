import React from "react";

import Disc from "./../../images/records.png";

class LoadingPage extends React.Component {

  render(){
    return(
          <div className="container-fluid">
              <div className="row">
                <div className="col-4"/>
                <div className="col-4">
                  <img src = {Disc} className="w100 rotationFast"/>
                </div>
                <div className="col-4"/>
              </div>
          </div>
    );
  }
}


export default LoadingPage;
