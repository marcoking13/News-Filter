import React from "react";

import Play from "./../../images/play.png";
import Pause from "./../../images/pause.png";

import BarStill from "./../progress/progress_bar_still.js";
import Bar from "./../progress/progress_bar.js";


class PlayBar extends React.Component{

  render(){
    if(this.props.song.isPlaying){
      return(
        <div className="row">
          <div className="col-1"/>
          <div className="col-1">
            <img src = {Pause} className="w100 playerM"/>
          </div>
          <div className="col-8">
            <Bar />
          </div>
          <div className="col-1"/>
        </div>
      )
    }else{
      return(
        <div className="row">
          <div className="col-1"/>
            <div className="col-1">
              <img src = {Play} className="w100 playerM"/>
            </div>
            <div className="col-8">
              <BarStill />
            </div>
          <div className="col-1"/>
        </div>
      )
    }
  }
}






export default PlayBar;
