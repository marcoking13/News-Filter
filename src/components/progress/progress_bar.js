import React from "react";
import "./../../css/utility.css";

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
            width: this.state.width + (100 / 30)
          });

        },1000);
  }

  render(){
      console.log(this.props.moving);
    return(
      <div class="progress mt1">
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
