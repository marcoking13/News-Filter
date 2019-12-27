import React from "react";

import Play from "./../../images/play.png";
import Pause from "./../../images/pause.png";
import Shuffle from "./../../images/random.png";

import BarStill from "./../progress/progress_bar_still.js";
import Bar from "./../progress/progress_bar.js";

import GreyStar from "./../../images/grey_star.png";
import YellowStar from "./../../images/yellow_star.png";
import MusicNote from "./../../images/music_note.png";

class PlayBar extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      fav:false,
      isPlaying:true
    }

  }

  favSong(bool){
    this.setState({fav:bool});
  }

  renderStar(){
    if(this.state.fav){
      return <img onClick = {()=>{this.favSong(false)}}  src = {YellowStar}  className="w50 bH ml25" />
    }else{
      return <img onClick = {()=>{this.favSong(true)}}  src = {GreyStar} className="w50 bH ml25" />
    }
  }

  renderBar(){
    console.log(this.props.isPlaying);
    if(this.props.timer <= 1 || !this.props.isPlaying){
      return <BarStill />
    }else{
      return <Bar />
    }
  }


  renderShuffle(){
    return <img src = {Shuffle} onClick = {()=>{this.props.CallSongs()}}className="w50 bH ml25" />
  }

  renderNote(){
    return <img src = {MusicNote} onClick = {()=>{window.open(this.props.song.external)}}className="w50 bH ml25" />
  }

  renderButton(){
    if(this.props.isPlaying){
      return <img src = {Pause} onClick = {()=>{this.props.togglePause(false)}} className="w50 bH ml25"/>
    }else{
      return <img src = {Play} onClick = {()=>{this.props.togglePause(true)}} className="w50 bH ml25"/>
    }
  }

  renderMobile(){
    return(
      <div className="container-fluid prl0 positionUpward mt10 b26 ptb1">
        <div className="row">

          <div className="col-3">
            {this.renderNote()}
          </div>
          <div className="col-3">
            {this.renderButton()}
          </div>
          <div className="col-3">
            {this.renderStar()}
          </div>
          <div className="col-3">
            {this.renderShuffle()}
          </div>
        </div>
        <div className="row p0 prl0">
            <div className="col-3"/>
            <div className="col-10">
              {this.renderBar()}
            </div>
        </div>
      </div>
    )
  }

  renderDesktop(){
    return(
      <div className="container-fluid prl0 positionUpward b26 ptb1">
        <div className="row">
          <div className="col-4"/>
          <div className="col-1">
            {this.renderNote()}
          </div>
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
        <div className="row p0 prl0">
            <div className="col-2"/>
            <div className="col-8">
              {this.renderBar()}
            </div>
        </div>
      </div>
    )
  }

  render(){
    if(window.innerWidth <= 600) {
      return(
        <div>
          {this.renderMobile()}
        </div>
      )
    }
    else{
      return(
        <div>
          {this.renderDesktop()}
        </div>
      )
    }
  }
}

export default PlayBar;
