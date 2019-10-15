import React from "react";



class SongsInAlbum extends React.Component {

  
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

export default SongsInAlbum;
