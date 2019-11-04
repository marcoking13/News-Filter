import React from "react";
import BackArrow from "./../../images/backArrow.png";
import Disc from "./../../images/disc.png";
import Play from "./../../images/play.png";
import axios from "axios";

class AlbumPage extends  React.Component {
  constructor(props){
    super(props);
    this.state  = {
      album:null
    }
  }

  renderSongs(songs){

    return  songs.map((song)=>{

        return(
          <li className="list-group-item bb bWW">

            <audio className="au">
                <source src = {song.preview_url} type="audio/mp3"/>
            </audio>

              <div className="row">

                  <div className="col-2">
                    <img className="w100" src = {this.props.albums.images[Math.floor(Math.random() * this.props.albums.images.length)].url} />
                  </div>

                  <div className="col-3">
                    <p className="cw">{"Song: "+song.name}</p>
                    <p className="cw">{"Artists: "+ song.artists[0].name}</p>
                  </div>

                  <div className="col-5 ">

                      <div className="row">

                        <div className="col-3">
                          <img src ={Play}  className="w100 mt10" onClick = {()=>{

                            // {window.open(song.preview_url, '_blank')

                            var audio = document.querySelector(".au");
                            audio.play();

                          }}/>
                          <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                       </div>

                       </div>

                  </div>

                  <div className="col-2">
                    <p className="cw f13">{"Views: "+Math.floor(Math.random() * 9000)}</p>
                  </div>

              </div>

          </li>
        );
      });
   }

  render(){

    return(
        <div className="container-fluid">

          <div className="row">

            <div className="col-3"/>
            <div className="col-6">

              <li className="list-group">
                {this.renderSongs(this.props.songs)}
              </li>

            </div>

          </div>

        </div>
    )
  }
}

export default AlbumPage;
