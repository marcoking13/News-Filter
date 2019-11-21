import React from "react";

import Disc from "./../../images/records.png";

class PlaylistShowcase extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className="container-fluid h200px">
          <div className="row">
            <div className="col-6 BWRR">
              <div className="row">
                <div className="col-4"/>
                  <div className="col-4">
                      <img className="rotationSlow w100" src = {Disc}/>
                  </div>
                <div className="col-4"/>
              </div>
            </div>
            <div className="col-6">
                <h4 className="text-center mt15 cw">Access Divine Radio </h4>
            </div>
          </div>
      </div>
    )
  }
}


export default PlaylistShowcase;
