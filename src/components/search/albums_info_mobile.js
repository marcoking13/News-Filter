import React from "react";



class AlbumInfoMobile extends React.Component {

  renderAlbums(){
    if(this.props.artist && this.props.albums){
      return this.props.albums.map((album)=>{

        var name = album.name;
        var imageURL = album.images[0].url;

        return (
          <li className="list-group-item bb">
            <div className="row">
              <div className="col-4">
                <img className="rounded albumRowImage" src={imageURL}/>
              </div>

              <div className="col-6">

                <p className="cw  mt10 fl">{name}</p>

              </div>

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
