import React from "react";

export default class FeaturesMobile extends React.Component {
  constructor(props){
    super(props);
    this.state = {

      index:0,
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

      return(
        <div className="col-12 appear featureL"style={{background:this.state.features[this.state.index].background}}>
          <div className="ribbon cw bw ">
              <h2 className="cw text-center bb mt40" >{this.state.features[this.state.index].title}</h2>
          </div>
        </div>
      );

  }

  componentDidMount(){
    this.interval = setInterval(()=>{
        if(this.state.index + 1 > this.state.features.length -1){
          this.setState({index: 0});
        }else{
            this.setState({index: this.state.index + 1});
        }
      },2000);
  }

  render(){
      return(
        <div className="row ">
          {this.renderFeatures()}
        </div>
      );
  }
}
