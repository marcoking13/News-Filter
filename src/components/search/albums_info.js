import React from "react";



class AlbumInfo extends React.Component {

  renderAlbums(){
    if(this.props.artist && this.props.albums){
      return this.props.albums.map((album)=>{

        var name = album.name;
        var imageURL = album.images[0].url;

        return (
          <div className="col-1" style={{marginLeft:"5px",marginTop:"15px"}}>
            <img className="rounded albumRowImage" src={imageURL}/>
            <p className="cw f10 text-center">{name}</p>
          </div>
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
