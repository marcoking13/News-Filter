import React from "react";

import Navbar from "./../components/navbar/navbar.js";
import Footnote from "./../components/footer/footnote.js";

import SongBox from "./../components/radio/song_box.js";
import PlayBar from "./../components/radio/play_bar.js";
import Loader from "./../components/radio/loading_page.js";

import "./../css/radio.css";

import Songs from "./../config/randomSongs";




class RadioPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs:Songs,
      current:null,
      reset:false,
      options:{
        method:"GET",
        headers:{
          "Authorization": "Bearer "+ this.props.token
        },
        mode:"cors",
        cache:"default"
      },
      timer:0
    }

    this.CallSongs(this.state.songs);
    this.CallSongs = this.CallSongs.bind(this);
  }

  componentDidMount(){

    this.timerCount = setInterval(()=>{

      if(this.state.timer === 30 ){
        this.CallSongs(this.state.songs);
      }else{
        this.setState({timer:this.state.timer + 1})
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
          this.setState({reset:true,current:current,timer:0});

        })

  }

  renderSong(){
    return(
      <div>
        <SongBox song = {this.state.current} songs = {this.state.songs} CallSongs = {this.CallSongs} />
        <PlayBar timer = {this.state.timer} song = {this.state.current} CallSongs = {this.CallSongs} />
      </div>
    )
  }


  render(){

    if(this.state.reset){
      return(
        <div className="container-fluid bb">
          <audio autoPlay loop>
            <source type="audio/mp3" src = {this.state.current.url}></source>
          </audio>
          <Navbar />
          <br />
          {this.renderSong()}
          <br />
          <br />
          <Footnote />
        </div>
      );
    }else{
      return (<Loader />)
    }
  }
}


export default RadioPage;
