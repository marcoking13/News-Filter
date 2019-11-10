import React from "react";

import Navbar from "./../../navbar/navbar.js";
import SearchBarMobile from "./../../search_bar/search_bar_mobile.js";
import LoadingMobile from "./../artist/loading_search_mobile.js";
import ArtistInfoMobile from "./../artist/artist_info_mobile.js";
import AlbumsInfoMobile from "./../albums/albums_info_mobile.js";

import Disc from "./../../../images/record.png";


class MobileSearchPage extends React.Component {

  renderResultsMobile(){
    if(!this.props.artist && !this.props.albums ){
        return <LoadingMobile artist = {this.props.artist} image = {Disc}/>
    }else{
      return(
        <div>
            <ArtistInfoMobile artist = {this.props.artist}/>
            <AlbumsInfoMobile
              SetToDisplayArtist = {this.props.SetToDisplayArtist}
              currentAlbum = {this.props.currentAlbum}
              songs = {this.props.songs}
              SearchSongsFromAlbum = {this.props.SearchSongsFromAlbum}
              artist = {this.props.artist}
              albums = {this.props.albums}
              />
        </div>
      );
    }
  }

  render(){

    return(

      <div>
        <Navbar />
        <div className="container-fluid">
          <SearchBarMobile
            data = {this.props.data}
            Search = {this.props.CallArtistAndAlbums}
            changeData = {this.props.changeData}
            artist = {this.props.artist}
            albums = {this.props.albums}/>
        </div>
        <br />
        <br />

        {this.renderResultsMobile()}

      </div>
      );
    }
  }



export default MobileSearchPage;
