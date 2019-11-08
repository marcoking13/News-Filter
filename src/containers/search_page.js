import React from "react";

import SearchPageMobile from "./../components/search/render/search_page_mobile.js";
import SearchPageDesktop from "./../components/search/render/search_page_desktop.js";

import "./../css/utility.css";

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
      currentAlbum:null,
      isShowingArtist:true
    }

    this.CallArtistAndAlbums = this.CallArtistAndAlbums.bind(this);
    this.changeData = this.changeData.bind(this);
    this.SearchSongsFromAlbum = this.SearchSongsFromAlbum.bind(this);
    this.SetToDisplaySongs = this.SetToDisplaySongs.bind(this);
    this.SetToDisplayArtist = this.SetToDisplayArtist.bind(this);

  }
//-----------------------State Changers-----------------------------------------
  changeData(data){
    this.setState({data:data});
  }

  SetToDisplayArtist(){
    this.setState({isShowingArtist:true});
  }

  SetToDisplaySongs(){
    this.setState({isShowingArtist:false});
  }




  //-----------------------Spotify Api Calls-----------------------------------------
  CallArtistAndAlbums(artist){

      const BASE_URL = "https://api.spotify.com/v1/search?";
      const FETCH_URL = BASE_URL + "q=" + artist +"&type=artist&limit=5";
      var url = window.location.href;

      var accessToken = url.slice(76,244);
      accessToken = accessToken.replace('/','Q');

      var options = {
        method:"GET",
        headers:{
          "Authorization": "Bearer "+ "BQDLR_UUNoEj795qiFHFwj03-EizDAKhCeD_Afxia6APT9W59zPdatJX3mjpdZqRkp4J_BhMw_dmsG50AlRGjAU5Wr9iQ65mbA0RLxUlyMzATz3uZy2mRvnN0ync4fpTITmu1I44FfEYx_uNMHUNi407UyvA3ivo1zcqtzNS"
        },
        mode:"cors",
        cache:"default"
      };

        fetch(FETCH_URL,options)
        .then(response =>response.json())

          .then(json => {

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
                    });

                  });
                }else{
                  this.setState(
                    {
                      error:true,
                      albums:null,
                      artist:null
                    }
                  );
                }

            });

          }

    SearchSongsFromAlbum(id,album){

          const BASE_URL = "https://api.spotify.com/v1/albums/"+id+"/tracks?";
          const FETCH_URL = BASE_URL + "limit=5";
          var url = window.location.href;

          var accessToken = url.slice(76,244);
          accessToken = accessToken.replace('/','Q');

          var options = {
            method:"GET",
            headers:{
              "Authorization": "Bearer "+ "BQDLR_UUNoEj795qiFHFwj03-EizDAKhCeD_Afxia6APT9W59zPdatJX3mjpdZqRkp4J_BhMw_dmsG50AlRGjAU5Wr9iQ65mbA0RLxUlyMzATz3uZy2mRvnN0ync4fpTITmu1I44FfEYx_uNMHUNi407UyvA3ivo1zcqtzNS"
            },
            mode:"cors",
            cache:"default"
          };

            fetch(FETCH_URL,options)
              .then((response) =>response.json()).then(json=>{
                this.setState(
                  {
                    songs:json.items,
                    currentAlbum:album,
                    isShowingArtist:false
                  }
                );
            });
    }

//-----------------------Render Method-----------------------------------------
  render(){
    console.log(this.state.currentAlbum);
    if(window.innerWidth <= 580){
      return (
        <SearchPageMobile
          artist = {this.state.artist}
          SearchSongsFromAlbum = {this.SearchSongsFromAlbum}
          CallArtistAndAlbums = {this.CallArtistAndAlbums}
          songs = {this.state.songs}
          albums = {this.state.albums}
          SetToDisplayArtist = {this.SetToDisplayArtist}
          SetToDisplaySongs = {this.SetToDisplaySongs}
          changeData = {this.changeData}
          currentAlbum = {this.state.currentAlbum}
          data = {this.state.data}
          error = {this.state.error}
          isShowingArtist = {this.state.isShowingArtist}
          />
        );
    }else{
      return (
        <SearchPageDesktop
          artist = {this.state.artist}
          SearchSongsFromAlbum = {this.SearchSongsFromAlbum}
          CallArtistAndAlbums = {this.CallArtistAndAlbums}
          songs = {this.state.songs}
          albums = {this.state.albums}
          currentAlbum = {this.state.currentAlbum}
          SetToDisplayArtist = {this.SetToDisplayArtist}
          SetToDisplaySongs = {this.SetToDisplaySongs}
          changeData = {this.changeData}
          data = {this.state.data}
          error = {this.state.error}
          isShowingArtist = {this.state.isShowingArtist}
          />
        );
    }
  }

}

export default SearchPage;
