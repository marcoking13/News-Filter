import React from "react";

import "./../../css/search.css";
import "./../../css/landing.css";

import Logo from "./../../images/note.png"

export default class NavbarMobile extends React.Component {
  render(){
    return(
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <div className="row">
                <div className="col-3">
                  <img  alt = "x" sclassName="w100" src={Logo}/>
                </div>
                <div className="col-5">
                    <p className=" cw text-center  mt10 bold fl">Divine Beats</p>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="links">
                  <ul>
                    <li className="cw nol ml2_5 f10 turnBold brW fr"> About</li>
                    <li className="cw nol ml2_5 f10 turnBold fr"> Download</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      );
  }
}
