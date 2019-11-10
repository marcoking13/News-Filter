import React from "react";

class LoadingSearch extends React.Component {
  render(){
    return(
      <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <p className="searchT bold mono text-center c26 mt10 ml5">{this.props.text}</p>
            <img alt = "loading"  src={this.props.image} className="searchIcoP"/>
          </div>
        <div className="col-3"></div>
      </div>
    );
  }
}

export default LoadingSearch;
