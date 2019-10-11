import React from "react";

import Loading from "./../components/search/loading_search.js";
import LoadingMobile from "./../components/search/loading_search_mobile.js";
import AlbumsInfo from "./../components/search/albums_info.js";
import AlbumsInfoMobile from "./../components/search/albums_info_mobile.js";
import ArtistInfo from "./../components/search/artist_info.js";
import ArtistInfoMobile from "./../components/search/artist_info_mobile.js";
import SearchBar from "./../components/search_bar";
import SearchBarMobile from "./../components/search_bar_mobile";
import Navbar from "./../components/navbar.js";

class SearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:"",
      keys:[],
      artist:null,
      albums:null

    }
    console.log(this.props);
    var url = window.location.href;


    var accessToken = url.slice(39,208);

    console.log(accessToken);
    this.CallArtistAndAlbums = this.CallArtistAndAlbums.bind(this);
    this.changeData = this.changeData.bind(this);

  }

  changeData(data){
      this.setState({data:data});
  }



  CallArtistAndAlbums(artist){

      const BASE_URL = "https://api.spotify.com/v1/search?";
      const FETCH_URL = BASE_URL + "q=" + artist +"&type=artist&limit=5";
      var url = window.location.href;


      var accessToken = url.slice(40,208);

      console.log(accessToken);

      console.log(accessToken);
      var options = {
        method:"GET",
        headers:{
          "Authorization": "Bearer "+ accessToken
        },
        mode:"cors",
        cache:"default"
      };

        fetch(FETCH_URL,options)
        .then(response =>response.json())

        .then(json => {

          var id = json.artists.items[0].id;

          const BASE_URL = `https://api.spotify.com/v1/artists/${id}/albums?`;
          const FETCH_URL = BASE_URL + "limit=10";

          fetch(FETCH_URL,options).then(album => album.json())
          .then(album =>{

            this.setState({
              albums:album.items,
              artist:json.artists.items[0]
            })

          });

        });

    }

    renderResults(){
      if(!this.state.artist && !this.state.albums ){

          return <Loading artist = {this.state.artist}/>

      }else{
        return(
          <div>
            <div>
              <ArtistInfo artist = {this.state.artist}/>
            </div>
            <div>
              <AlbumsInfo  artist = {this.state.artist} albums = {this.state.albums}/>
            </div>
          </div>
        )
      }

    }

    renderResultsMobile(){
      if(!this.state.artist && !this.state.albums ){

          return <LoadingMobile artist = {this.state.artist}/>

      }else{
        return(
          <div>
            <div>
              <ArtistInfoMobile artist = {this.state.artist}/>
            </div>
            <div>
              <AlbumsInfoMobile  artist = {this.state.artist} albums = {this.state.albums}/>
            </div>
          </div>
        )
      }

    }

    renderDesktop(){
      return(
        <div>
          <Navbar />
          <div className="container-fluid">
            <SearchBar data = {this.state.data} Search = {this.CallArtistAndAlbums} changeData = {this.changeData} artist = {this.state.artist} albums = {this.state.albums}/>
          </div>
          <br />
          <br />
          <div>
            {this.renderResults()}
          </div>


        </div>
      )
    }

    renderMobile(){
      return(
        <div>
          <Navbar />
          <div className="container-fluid">
            <SearchBarMobile data = {this.state.data} Search = {this.CallArtistAndAlbums} changeData = {this.changeData} artist = {this.state.artist} albums = {this.state.albums}/>
          </div>
          <br />
          <br />
          <div>
            {this.renderResultsMobile()}
          </div>


        </div>
      )
    }

  render(){
    if(window.innerWidth <= 580){
      return <div>{this.renderMobile()}</div>
    }else{
      return <div>{this.renderDesktop()}</div>
    }
  }

}

export default SearchPage;
