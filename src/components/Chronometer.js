import React from "react"; 
export default class App extends React.Component{
    state={
        sec:0,
        min:59,
        h:0,
    }
  timer =()=>{
    setInterval(()=>{this.setState((time)=>({
        sec:time.sec < 60?time.sec + 1: 0,
        min:time.sec === 60&& time.min <60?time.min + 1:time.min<60?time.min:0,
        h:time.min === 60?time.h + 1:time.h,
      }))},30)
  }
    render(){
    return(
      <div>
        <p>
        {this.state.h <10? "0"+ this.state.h:this.state.h}:
        {this.state.min <10? "0"+ this.state.min:this.state.min}:
        {this.state.sec <10? "0"+ this.state.sec:this.state.sec}
        </p>
        <button onClick={this.timer}>start</button>
        <button>stop</button>
        <button>reset</button>
      </div>
    )
  }
}