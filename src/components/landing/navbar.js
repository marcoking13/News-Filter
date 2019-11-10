import React from "react";

import "./../../css/search.css";
import "./../../css/landing.css";

import Logo from "./../../images/note.png"

export default class Navbar extends React.Component {
  render(){
    return(
        <div className="container-fluid">
          <div className="row">

            <div className="col-2">
              <img  alt = "logo" className="landingLogo fl w50" src={Logo}/>
              <p className=" cw landingTitle mt10 fl">Divine Beats</p>
            </div>

            <div className="col-5"/>

            <div className="col-5">

              <div className="links">
                  <ul>
                    <li className="cw nol ml2_5 fl"> About</li>
                    <li className="cw nol ml2_5 fl"> Download</li>
                    <li className="cw nol ml2_5 fl"> Spotify</li>
                  </ul>
                <a href="/spotify-login">  <button className="ui turnWhite button orange ml10  fr f10 ">Login with Spotify</button></a>
                </div>

              </div>

            </div>

        </div>
      );
  }
}
