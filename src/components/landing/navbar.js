import React from "react";
import {Link} from "react-router-dom";

import "./../../css/search.css";
import "./../../css/landing.css";

export default class Navbar extends React.Component {
  render(){
    return(
        <div className="container-fluid">
          <div className="row">

            <div className="col-2">
              <img className="landingLogo fl w50" src="assets/images/logo.png"/>
              <p className=" cw landingTitle mt10 fl">Music Bender</p>
            </div>

            <div className="col-5"/>

            <div className="col-5">

              <div className="links">
                  <ul>
                    <li className="cw nol ml2_5 fl"> About</li>
                    <li className="cw nol ml2_5 fl"> Download</li>
                    <li className="cw nol ml2_5 fl"> Spotify</li>
                  </ul>
                <a href="http://localhost:5000/spotify-login">  <button className="ui turnWhite button orange ml10  fr f10 ">Login with Spotify</button></a>
                </div>

              </div>

            </div>

        </div>
      );
  }
}
