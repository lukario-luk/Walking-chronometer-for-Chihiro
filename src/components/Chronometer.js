import React from "react"; 
export default class App extends React.Component{
    state={
        sec:0,
        min:0,
        h:0,
        player:true,
        ChronometerComplete:"00:00:00",
    }
    
  timer =()=>{
    this.setState({
      player: false
    })
    if (this.state.player === true){
      
    const i = setInterval(()=>{this.setState((time)=>({
        sec:time.sec < 59?time.sec + 1: 0,
        min:time.sec === 59&& time.min <59?time.min + 1:time.min<59?time.min:0,
        h:time.min === 59?time.h + 1:time.h,
        ChronometerComplete:`${time.h <10? "0"+ time.h:time.h}:${time.min <10? "0"+ time.min:time.min}:${time.sec <10? "0"+ time.sec:time.sec}`
      }))},1000)
      this.stop=()=>{
        clearInterval(i)
      }
    }
    
  }
  componentDidUpdate(){
    document.title= this.state.ChronometerComplete
  }
    render(){
      console.log(this.state.sec)
      return(
      <div>
        <h3>{new Date().toLocaleDateString()}</h3>
        <p>
          {this.state.ChronometerComplete}
        </p>
        <button onClick={this.timer}>start</button>
        <button onClick={()=>{this.setState({player:true}); this.stop()}}>stop</button>
        <button onClick={()=>{this.setState({h:0,min:0,sec:0, ChronometerComplete:"00:00:00"}); this.stop()}}>reset</button>
      </div>
    )
  }
}