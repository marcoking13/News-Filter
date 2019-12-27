import React from "react";

import "./../../../css/utility.css";

class ArtistInfo extends React.Component {
  render(){
    return(
      <div className="row jumbotron">
        <div className="col-3"/>
        <div className="col-4 bb">
          <img alt = "artist"  className="w70 rounded float-left" src= {this.props.artist.images[0].url}/>
        </div>
        <div className="col-5 bb">
          <ul className="artDPUL mt5">
              <li className="list-circle mt5  cw">Name:<strong>{this.props.artist.name}</strong></li>
              <li className="list-circle mt5 cw">{"Type: "+this.props.artist.type}</li>
              <li className="list-circle mt5 cw">{"Genre: "+this.props.artist.genres[0]}</li>
              <li className="list-circle mt5 cw">{"Popularity: "+this.props.artist.popularity}</li>
              <li className="list-circle mt5 cw">{"Followers: "+this.props.artist.followers.total}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ArtistInfo;
