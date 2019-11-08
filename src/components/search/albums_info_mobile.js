import React from "react";

import SongResults from "./song_results_mobile.js";

class AlbumInfoMobile extends React.Component {

  renderSongs(album){
    console.log(album,this.props.currentAlbum);
    if(this.props.currentAlbum === album){
      return <SongResults albums= {this.props.currentAlbum} songs = {this.props.songs} />
    }else{
      return <div />
    }
  }

  renderAlbums(){
    if(this.props.artist && this.props.albums){
      return this.props.albums.map((album)=>{

        var name = album.name;
        var imageURL = album.images[0].url;

        return (
          <li className="list-group-item bb" onClick = {()=>{this.props.SearchSongsFromAlbum(album.id,album)}}>
            <div className="row">
              <div className="col-4">
                <img className="rounded albumRowImage" src={imageURL}/>
              </div>
              <div className="col-6">
                <p className="cw  mt10 fl">{name}</p>
              </div>
            </div>
            <div className="container-fluid">
                {this.renderSongs(album)}
            </div>
          </li>
        );

    });
  }
}

render(){
  if(this.props.artist && this.props.albums){
      return(
        <div className="container-fluid mt5">
          <br />
          <br />
          <div>
              <h5 className=" text-center cw">Discography</h5>
              <ul className="list-group ">
                  {this.renderAlbums()}
              </ul>
            </div>
          </div>
      )
    }
}



}

export default AlbumInfoMobile;
