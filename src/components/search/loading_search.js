import React from "react";



class ArtistInfo extends React.Component {
  render(){

    return(

      <div className="row">

      <div className="col-3"></div>
        <div className="col-6">
          <p className="searchT bold mono text-center c26 mt10 ml5">Search any song or artist!</p>
          <img src="assets/images/record.png" className="searchIcoP"/>

         </div>
      <div className="col-3"></div>
    </div>

    )
  }
}



export default ArtistInfo;
