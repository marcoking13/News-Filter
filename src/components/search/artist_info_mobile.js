import React from "react";



class ArtistInfoMobile extends React.Component {
  render(){
    console.log(this.props.artist);
    return(

      <div className="row bbBW pb5">
        <div className="col-1"/>
        <div className="col-4">

          <img className="w100 rounded ml5 float-left" src= {this.props.artist.images[0].url}/>


        </div>
        <div className="col-6">
          <ul className=" mt5">
              <li className="list-circle mt5  cw">Name:<strong>{this.props.artist.name}</strong></li>
              <li className="list-circle mt5 cw">{"Type: "+this.props.artist.type}</li>
              <li className="list-circle mt5 cw">{"Genre: "+this.props.artist.genres[0]}</li>
              <li className="list-circle mt5 cw">{"Popularity: "+this.props.artist.popularity}</li>
              <li className="list-circle mt5 cw">{"Followers: "+this.props.artist.followers.total}</li>
          </ul>
        </div>
      </div>
    )
  }
}



export default ArtistInfoMobile;
