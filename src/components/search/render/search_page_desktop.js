import React from "react";

import Navbar from "./../../navbar/navbar.js";
import SearchBar from "./../../search_bar/search_bar.js";
import Loading from "./../artist/loading_search.js";
import ArtistInfo from "./../artist/artist_info.js";
import AlbumsInfo from "./../albums/albums_info.js";
import SongResults from "./../songs/song_results.js";

import Disc from "./../../../images/record.png";
import Error  from "./../../../images/error.png";

class SearchPage extends React.Component {

  renderResults(){
    if(this.props.error){
      return <Loading image = {Error} text = "Could not find any artists"/>
    }else if(!this.props.artist && !this.props.albums ){
          return <Loading artist = {this.props.artist} text="Search any Artist" image = {Disc}/>
    }else if (this.props.isShowingArtist && this.props.artist){
          return  <ArtistInfo artist = {this.props.artist}/>
      }else if(!this.props.isShowingArtist && this.props.artist){
          return  <SongResults albums= {this.props.currentAlbum} songs = {this.props.songs} />
      }
  }

  renderAlbums(){
    if(this.props.albums){
      return (
        <AlbumsInfo
          SetToDisplayArtist = {this.props.SetToDisplayArtist}
          artist = {this.props.artist}
          currentAlbum = {this.props.currentAlbum}
          SearchSongsFromAlbum = {this.props.SearchSongsFromAlbum}
          albums = {this.props.albums}
          CallArtistAndAlbums = {this.props.CallArtistAndAlbums}
        />
      );
    }
  }

  render(){

    return(

      <div>
        <Navbar />
        <div className="container-fluid">

          <SearchBar
            data = {this.props.data}
            Search = {this.props.CallArtistAndAlbums}
            changeData = {this.props.changeData}
            artist = {this.props.artist}
            albums = {this.props.albums}/>
        </div>

        <br />
        <br />

        {this.renderResults()}
        <br />
        {this.renderAlbums()}

      </div>
    );
    }
  }


export default SearchPage;
