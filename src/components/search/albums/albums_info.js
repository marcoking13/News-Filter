import React from "react";

import BackArrow from "./../../../images/backArrow.png";

class AlbumInfo extends React.Component {

  renderAlbums(){
    if(this.props.artist && this.props.albums){
      return this.props.albums.map((album)=>{

        var name = album.name;
        var imageURL = album.images[0].url;
        var red;

        if(this.props.currentAlbum){
            if(this.props.currentAlbum.id === album.id){
              red = "rBB permUp";
            }
          }

        return (
          <div className="col-2" onClick = {()=>{this.props.SearchSongsFromAlbum(album.id,album)}} style={{marginLeft:"5px",marginTop:"15px"}}>
            <img  alt = "album"  className={"rounded moveUpBox albumRowImage "+red} src={imageURL}/>
            <p className="cw f10 text-center">{name}</p>
          </div>
        )

    });

  }

}

render(){
  if(this.props.artist && this.props.albums){
      return(
        <div className="container-fluid ">
            <img alt = "back" className="arrowBack" onClick = {()=>{this.props.SetToDisplayArtist()}} src = {BackArrow}/>
          <div>
              <h3 className=" text-center cw">Albums</h3>
              <div className="row ml10 w90 ">
                  {this.renderAlbums()}
              </div>
            </div>
          </div>
      )
    }
  }

}

export default AlbumInfo;
