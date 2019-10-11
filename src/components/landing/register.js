import React from "react";

export default class Register extends React.Component {
  render(){

    return(
      <div>
          <br />
          <h5 className="cw  bold Lato text-center mt5" >Don't Have Spotify?</h5>
            <div className="row">
              <div className="col-3"/>
              <div className="col-6">
                  <a href ="http://spotify.com"><button className="button ui cw mt10  w100 inverted red turnWhite">Register Here</button></a>
              </div>
              <div className="col-3"/>
            </div>
          </div>
      );
  }
}
