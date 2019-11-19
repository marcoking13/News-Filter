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
                    <p className=" cw text-center  mt10 bold fl">Divine Beats</p>
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
