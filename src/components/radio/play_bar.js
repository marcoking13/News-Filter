import React from "react";

import Play from "./../../images/play.png";
import Pause from "./../../images/pause.png";
import Shuffle from "./../../images/random.png";

import BarStill from "./../progress/progress_bar_still.js";
import Bar from "./../progress/progress_bar.js";
import GreyStar from "./../../images/grey_star.png";
import YellowStar from "./../../images/yellow_star.png";

class PlayBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fav:false
    }
  }
  renderStar(){
    if(this.state.fav){
      return <img src = {YellowStar} className="w50 ml25" />
    }else{
      return <img src = {GreyStar} className="w50 ml25" />
    }
  }

  renderBar(timer){
    if(timer == 0){
      return <BarStill />
    }else{
      return <Bar />
    }
  }

  renderBar(){
    if(this.props.song.isPlaying){
      return <Bar />
    }else{
      return <BarStill />
    }
  }

  renderShuffle(){
    return <img src = {Shuffle} onClick = {()=>{this.props.CallSongs(this.props.song)}}className="w50 ml25" />
  }
  renderButton(){
    if(this.props.song.isPlaying){
      return <img src = {Pause} className="w50 ml25"/>
    }else{
      return <img src = {Play} className="w50 ml25"/>
    }
  }

  render(){

      return(
        <div className="container-fluid">
          <div className="row">
            <div className="col-4"/>
            <div className="col-1">
              {this.renderButton()}
            </div>
            <div className="col-1">
              {this.renderStar()}
            </div>
            <div className="col-1">
              {this.renderShuffle()}
            </div>
            <div className="col-4"/>
          </div>
          <div className="row">
              <div className="col-2"/>
              <div className="col-8">
                {this.renderBar()}
              </div>
          </div>
        </div>
      )

  }
}






export default PlayBar;
