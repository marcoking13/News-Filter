import React from "react";

export default class Features extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      features:[
        {
          title:"Search any Music",
          background: 'url("assets/images/background1.png")',
        },
        {
          title:"Make your own Playlists!",
          background: 'url("assets/images/background2.jpg")',
        },
        {
          title:"Share and Discover Music!",
          background: 'url("assets/images/background3.jpg")',
        }
      ]
    }
  }

  renderFeatures(){
    var i = 0;
    return this.state.features.map((feature)=>{
      i++;
      return(
        <div className="col-3 featureL" key = {i} style={{background:feature.background}}>
          <div className="ribbon cw bw ">
              <h5 className="cw text-center bb mt40" >{feature.title}</h5>
          </div>
        </div>
      )
    })
  }

  render(){
      return(
        <div className="row ">
          <div className="col-1"/>
              {this.renderFeatures()}
          <div className="col-1"/>
        </div>
      )
  }
}
