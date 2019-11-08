import React from "react";

export default class ShowcaseMobile extends React.Component {
  render(){
    var background = `url("assets/images/faded.jpg")`
    return(
      <div className="row  pB10 oB"style={{background:background}}>
        <div className="col-3"/>
          <div className="col-6">

              <h3 className="cw ui  huge header mt10 ml2_5 Lato text-center">Login with Spotify to access a world of music</h3>
              <div className="row">

                <div className="col-12">
                  <a href="/spotify-login"><button className=" ui button black turnWhite w100 mt10 ">Sign in with Spotify</button></a>
                </div>

              </div>
          </div>
      </div>
      );
  }
}
