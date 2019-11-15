import React from "react";

import Navbar from "./../components/navbar/navbar.js";
import Footnote from "./../components/footer/footnote.js";

import SongBox from "./../components/radio/song_box.js";
import PlayBar from "./../components/radio/play_bar.js";

import "./../css/radio.css";

import Songs from "./../config/randomSongs";



class RadioPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs:Songs,
      current:null,
      next:false,
      options:{
        method:"GET",
        headers:{
          "Authorization": "Bearer "+ this.props.token
        },
        mode:"cors",
        cache:"default"
      }
    }

    this.CallSongs(this.state.songs);
  }

  componentDidMount(){
    var timer = 0;
    this.timer = setInterval(()=>{
      timer++;
      if(timer === 30 ){
        timer = 0;
        this.CallSongs(this.state.songs);
      }
    },1000);
  }

  CallSongs(song){

    var songID = song[Math.floor(Math.random() * song.length)];
    const BASE_URL = "https://api.spotify.com/v1/tracks/"
    const FETCH_URL = BASE_URL + songID;
    fetch(FETCH_URL,this.state.options)
      .then(response =>response.json())

        .then(json => {
          console.log(json);
            var current = {
              artist: json.artists[0].name,
              songName:json.name,
              finish:false,
              url:json.preview_url,
              image:json.album.images[0].url,
              isPlaying:true
            }
            this.setState({
              current:current
            })
        })

  }



  render(){

    if(this.state.current){
      return(
        <div className="container-fluid bb">
          <audio autoPlay>
            <source type="audio/mp3" src = {this.state.current.url}></source>
          </audio>
          <Navbar />
          <br />
          <SongBox song = {this.state.current} />
          <PlayBar song = {this.state.current} />
          <br />
          <br />
          <Footnote />
        </div>
      );
    }else{
      return null;
    }
  }
}


export default RadioPage;
