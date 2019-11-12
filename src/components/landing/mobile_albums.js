
import React from "react";

import LandingAlbums from "./../../config/landing_page_albums.js";

export default class Albums extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      albums:LandingAlbums
    }
  }

  renderMusicSamples(){
      var html = [];
      for(var i = 0; i <5;i++){

        var index = i + this.props.offset;

        html.push(

          <li className="list-group-item bb bbBW turn26">
            <div className="row">
              <div className="col-4">

                <img alt = "record"  className="w70 br10 changeSize" src={this.state.albums[index].background}/>
              </div>
              <div className="col-6">
                <p className="cw"><strong>Artist:</strong>{ " "+this.state.albums[index].name}</p>

                <p className="cw "><strong>Album:</strong>{" "+ this.state.albums[index].album}</p>
              </div>
          </div>
        </li>


      )
    }
    return html;

  }

  render(){
    return(
        <div className="container-fluid bbBW ">
          <br />
          <p className="catagoryName  underline bold cw">{this.props.title}</p>
          <div className="row">
            <div className="col-1"/>
              {this.renderMusicSamples()}
            <div className="col-1"/>
          </div>
        </div>
      );
    }
    
}
