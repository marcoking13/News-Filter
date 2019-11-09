import React from "react";

import BarStill from "./progress_bar_still.js";
import Bar from "./progress_bar.js";

import Disc from "./../../images/disc.png";
import Play from "./../../images/play.png";
import Pause from "./../../images/pause.png";
import Lock from "./../../images/lock.png";
import RecordPlayer from "./../../images/records.png";



class SongResultsMobile extends React.Component {

  constructor(props){
    super(props);
    var songC =[];

    this.props.songs.map((song)=>{

       songC.push({
        name:song.name,
        url:song.preview_url,
        id:"l",
        playing:false
      });

    });

    this.state  = {
      songs:songC
    }

  }

  PlaySong (selectedSong) {

      const songs = this.state.songs.slice();

      songs.forEach((song) => {
        song.playing = false;

        if (song.name === selectedSong.name) {
            song.playing = true;
          }

        });

      this.setState({ songs:songs });

      console.log(this.state.songs);
  }

  renderImage(song){
    if(song.playing){
      return <img className="w100 rotating" src = {RecordPlayer} />
    }else{
      return <img className="w100" src = {RecordPlayer} />
    }
  }


  renderAudio(song){
      console.log(song);
      for(var i = 0; i < song.length; i++){
        if(song[i].playing){
        return (
          <audio className="au " id = {song.id}  data = {song.id} autoPlay>
              <source src = {song.url} type="audio/mp3"/>
          </audio>
        );

      }else{
        return null;
      }

    }

}



renderPlayer(song){
  if(song.url && !song.playing){
    return(
      <div className="row mt10">
        <div className="col-5 p0 ">
            <img
              className="w100 posUp"
              onClick = {()=>{
                 this.PlaySong(song);
              }}
              src = {Play}/>
        </div>
        <div className="col-7 mt2_5 p0">
            <BarStill />
        </div>
      </div>
      );

      }else if(song.url && song.playing){
        return(
          <div className="row m15">
            <div className="col-4">
                <img
                  className="w120"
                  onClick = {()=>{
                    this.PlaySong(song);
                  }}
                  src = {Pause}/>
                />
            </div>
            <div className="col-8 mt2_5">
                <Bar />
            </div>
          </div>
      );
      } else{
        return (
          <div className="row mt2_5">
            <div className="col-6 mt5">
                <img className="w100" src = {Lock}/>
            </div>
          </div>
        );
      }
 }


  renderSongs(songs){

    return songs.map((song)=>{

        return (
          <div>
              <div className="row bHoverR bBB b26">
                <div className="col-2 mt5  p0">
                  {this.renderImage(song)}
              </div>
              <div className="col-5 p0 mt2_5">
                  <p className="cw mt10 ml5 text-center">{song.name  }</p>
              </div>
              <div className="col-5">
                {this.renderPlayer(song)}
              </div>
              <div className="col-12 ">
                  <p className="cw w100 text-right">{"Views: " + Math.floor(Math.random() * 1000)}</p>
              </div>
              </div>
          </div>
        )

    });

  }

  render(){

      return(

        <div className="mt5">
          {this.renderAudio(this.state.songs)}
          <br />
          {this.renderSongs(this.state.songs)}
        </div>
      )
  }
}

export default SongResultsMobile;
