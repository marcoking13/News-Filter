import React from "react";

export default class Bar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      width:10,
    }
  }

  componentDidMount(){

      this.timer = setInterval(()=>{
          this.setState({
            width: this.state.width + (100 / 60)
          });

        },900);
  }

  render(){
      console.log(this.props.moving);
    return(
      <div class="progress mt5">
        <div
          className="progress-bar progress-bar-striped  bg-danger"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{width:this.state.width + "%"}}
          />
      </div>
    );
  }
}
