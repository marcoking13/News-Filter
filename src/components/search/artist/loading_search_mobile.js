import React from "react";

import Record from "./../../../images/record.png";

class LoadingSearch extends React.Component {
  render(){
    return(
      <div className="row">
        <div className="col-4"></div>
          <div className="col-4">
              <p className="searchT bold mono text-center c26 mt10  ">Search any song or artist!</p>
              <img  alt = "record" src={Record} className="w100 ml3"/>
          </div>
          <div className="col-4"></div>
        </div>
    );
  }
}

export default LoadingSearch;
