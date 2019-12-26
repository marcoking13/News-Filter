import React from "react";

import Arrow from "./../../images/random.png";
import Sample from "./../../images/sample.jpg";

import "./../../css/radio.css";

class SongBox extends React.Component{

  render(){
      if(window.innerWidth > 600){
        return (
          <div className="row  ">

            <div className="col-2"/>
            <div className="col-8">
              <img className="w100 bounce" src = {this.props.song.image} />
              <h6 className="text-center cw bold">{this.props.song.songName}</h6>
              <p className="text-center cw"> {this.props.song.artist} </p>
            </div>
            <div className="col-2"/>


        </div>
        )
      }else{
        return(

          <div className="row positionUpward">
            <div className="col-1"/>
            <div className="col-10">
              <img className="w100 " src =  {this.props.song.image} />
              <h6 className="text-center cw bold"> {this.props.song.songName} </h6>
              <p className="text-center cw"> {this.props.song.artist} </p>
            </div>

            <div className="col-1"/>
          </div>
        )
      }
  }
}






export default SongBox;
