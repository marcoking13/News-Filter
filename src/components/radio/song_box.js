import React from "react";

import Arrow from "./../../images/random.png";
import Sample from "./../../images/sample.jpg";

class SongBox extends React.Component{

  render(){
      if(window.innerWidth < 600){
        return (
          <div className="row">

            <div className="col-3"/>
            <div className="col-6">
            <img className="w100 br10px" src = {this.props.song.image} />
            <h6 className="text-center cw bold">{this.props.song.songName}</h6>
            <p className="text-center cw"> {this.props.song.artist} </p>
          </div>

          <div className="col-2">
              <img className="w100 shuffle br10px" src = {Arrow} />
          </div>
        </div>
        )
      }else{
        return(

          <div className="row">
            <div className="col-4"/>
            <div className="col-4">
              <img className="w100 br10px" src =  {this.props.song.image} />
              <h6 className="text-center cw bold"> {this.props.song.songName} </h6>
              <p className="text-center cw"> {this.props.song.artist} </p>
            </div>
            <div className="col-2"/>
            <div className="col-1">
                <img className="w100 br10px" src = {Arrow} />
            </div>
          </div>
        )
      }
  }
}






export default SongBox;
