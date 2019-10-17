import React from "react";

import AlbumPage from "./album_page_mobile.js";


class AlbumInfoMobile extends React.Component {


  renderAlbumPageMobile(){
    if(this.props.currentAlbum){
      return <AlbumPage albums= {this.props.currentAlbum} songs = {this.props.songs} />
    }else{
      return <p className="cw">....</p>
    }
  }


  renderAlbums(){
    if(this.props.artist && this.props.albums){
      return this.props.albums.map((album)=>{

        var name = album.name;
        var imageURL = album.images[0].url;

        return (
          <li className="list-group-item bb" onClick = {()=>{this.props.GetSongs(album.id,album)}}>
            <div className="row">
              <div className="col-4">
                <img className="rounded albumRowImage" src={imageURL}/>
              </div>

              <div className="col-6">

                <p className="cw  mt10 fl">{name}</p>

              </div>

            </div>
            <div className="container-fluid">
                {this.renderAlbumPageMobile()}
            </div>
          </li>
        )

    })

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
