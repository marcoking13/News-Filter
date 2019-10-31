import React from "react";
import Disc from "./../../images/disc.png";
import Play from "./../../images/play.png";

class AlbumPageMobile extends React.Component {

  renderSongs(songs){

    return songs.map((song)=>{

        return (
          <div>

              <div className="row">
                <div className="col-2">
                  <img className="w100" src =  {this.props.albums.images[Math.floor(Math.random() * this.props.albums.images.length)].url}/>
              </div>

              <div className="col-3">
                  <p className="cw text-center">{"Name: " + song.name  }</p>
                  <p className="cw text-center">{"Name: " + song.name  }</p>
              </div>
              <div className="col-3">
                <img className="w100" src = {Play}/>
              </div>
              <div className="col-3">
                  <p className="cw">{"Views: " + Math.floor(Math.random() * 1000)}</p>
              </div>
              </div>
          </div>
        )

    });

  }


  render(){
      return(
        <div className="mt5">
          <br />
            {this.renderSongs(this.props.songs)}
        </div>
      )
  }
}

export default AlbumPageMobile;
