import React from "react";

import Loading from "./../components/search/loading_search.js";
import LoadingMobile from "./../components/search/loading_search_mobile.js";
import AlbumsInfo from "./../components/search/albums_info.js";
import AlbumsInfoMobile from "./../components/search/albums_info_mobile.js";
import ArtistInfo from "./../components/search/artist_info.js";
import ArtistInfoMobile from "./../components/search/artist_info_mobile.js";
import SearchBar from "./../components/search_bar";
import Disc from "./../images/record.png";
import SearchBarMobile from "./../components/search_bar_mobile";
import Navbar from "./../components/navbar.js";
import AlbumPage from "./../components/search/album_page.js";
import Error from "./../images/error.png";
import AlbumPageMobile from "./../components/search/album_page_mobile.js";

class SearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:"",
      keys:[],
      error:false,
      artist:null,
      albums:null,
      songs:null,
      currentAlbum:null

    }

    this.CallArtistAndAlbums = this.CallArtistAndAlbums.bind(this);
    this.changeData = this.changeData.bind(this);
    this.SearchSongsFromAlbum = this.SearchSongsFromAlbum.bind(this);
    console.log(this.props.token);
  }

  changeData(data){
      this.setState({data:data});

  }



  CallArtistAndAlbums(artist){

      const BASE_URL = "https://api.spotify.com/v1/search?";
      const FETCH_URL = BASE_URL + "q=" + artist +"&type=artist&limit=5";
      var url = window.location.href;


      var accessToken = url.slice(76,244);
      accessToken = accessToken.replace('/','Q');
      console.log(accessToken);

      console.log(accessToken);

      var options = {
        method:"GET",
        headers:{
          "Authorization": "Bearer "+ "BQCdKaLtcV4706mmcNWS7P-EeeZRXhdb_W2S-muMl1QbOmnEZZn0bjevheyIy9Dku0J_xA5wJxyygKMw04zqVrfPZocq1lJptMTmlihFu9CjryipV-m1OhNNwIx47qG7PDCEnfprKJazesQ1TZz_kye_znktFHz6t0kDpHx7"
        },
        mode:"cors",
        cache:"default"
      };

        fetch(FETCH_URL,options)
        .then(response =>response.json())

        .then(json => {
          console.log(json);
          if(json.artists.items.length > 1 ){
          var id = json.artists.items[0].id;

          const BASE_URL = `https://api.spotify.com/v1/artists/${id}/albums?`;
          const FETCH_URL = BASE_URL + "limit=10";

          fetch(FETCH_URL,options).then(album => album.json())
          .then(album =>{

            this.setState({
              albums:album.items,
              artist:json.artists.items[0],
              error:false
            })

          });
        }else{
          this.setState({error:true,albums:null,artist:null});
        }
        });

    }

    SearchSongsFromAlbum(id,album){

          const BASE_URL = "https://api.spotify.com/v1/albums/"+id+"/tracks?";
          const FETCH_URL = BASE_URL + "limit=5";
          var url = window.location.href;

          var accessToken = url.slice(76,244);
          accessToken = accessToken.replace('/','Q');
          console.log(accessToken);

          var options = {
            method:"GET",
            headers:{
              "Authorization": "Bearer "+ "BQCdKaLtcV4706mmcNWS7P-EeeZRXhdb_W2S-muMl1QbOmnEZZn0bjevheyIy9Dku0J_xA5wJxyygKMw04zqVrfPZocq1lJptMTmlihFu9CjryipV-m1OhNNwIx47qG7PDCEnfprKJazesQ1TZz_kye_znktFHz6t0kDpHx7"
            },
            mode:"cors",
            cache:"default"
          };

            fetch(FETCH_URL,options)
            .then((response) =>response.json()).then(json=>{
              this.setState({songs:json.items,currentAlbum:album});

            });

    }

    renderResults(){
      if(this.state.error){
        return <Loading image = {Error} text = "Could not find any artists"/>
      }else{
        if(!this.state.artist && !this.state.albums ){
            return <Loading artist = {this.state.artist} text="Search any Artist" image = {Disc}/>
      }else{
          return(
            <div>
              <div>
                <ArtistInfo artist = {this.state.artist}/>
              </div>
              <div>
                <AlbumsInfo  artist = {this.state.artist} currentAlbum = {this.state.currentAlbum} getSongs = {this.SearchSongsFromAlbum} albums = {this.state.albums}/>
              </div>
            </div>
          )
        }
      }
    }

    renderResultsMobile(){
      if(!this.state.artist && !this.state.albums ){

          return <LoadingMobile artist = {this.state.artist} image = {Disc}/>

      }else{
        return(
          <div>
            <div>
              <ArtistInfoMobile artist = {this.state.artist}/>
            </div>
            <div>
              <AlbumsInfoMobile   currentAlbum = {this.state.currentAlbum}  songs = {this.state.songs}  GetSongs = {this.SearchSongsFromAlbum} artist = {this.state.artist} albums = {this.state.albums}/>
            </div>

          </div>
        )
      }

    }

    renderDesktop(){
      return(
        <div>
          <Navbar token = {window.location.href.slice(40,208)} email = {window.location.href.slice(209,233)}/>
          <div className="container-fluid">
            <SearchBar data = {this.state.data} Search = {this.CallArtistAndAlbums} changeData = {this.changeData} artist = {this.state.artist} albums = {this.state.albums}/>
          </div>
          <br />
          <br />
          <div>
            {this.renderResults()}
          </div>

          <div>
              {this.renderAlbumPage()}
          </div>
          {this.renderAlbumPage()}


        </div>
      )
    }

    renderAlbumPage(){
      if(this.state.currentAlbum){
        return <AlbumPage albums= {this.state.currentAlbum} songs = {this.state.songs} />
      }else{
        return <p className="cw">....</p>
      }
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

          <div>

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
