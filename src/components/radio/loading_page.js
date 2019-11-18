import React from "react";

import Disc from "./../../images/disc.png";

class LoadingPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
          <div className="container-fluid">
              <div className="row">
                <div className="col-4"/>
                <div className="col-4">
                  <img src = {Disc} className="w100 rotation"/>
                </div>
                <div className="col-4"/>
              </div>
          </div>
    );
  }
}


export default LoadingPage;
