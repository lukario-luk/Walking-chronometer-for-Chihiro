import React from "react";
import Frame1 from "../assets/Chihiro-caminhando1.png"
import Frame2 from "../assets/Chihiro-caminhando2.png"
import Frame3 from "../assets/Chihiro-caminhando3.png"
import Frame4 from "../assets/Chihiro-caminhando4.png"
import Frame5 from "../assets/Chihiro-caminhando5.png"
import Frame6 from "../assets/Chihiro-caminhando6.png"
import Frame7 from "../assets/Chihiro-caminhando7.png"
import Frame8 from "../assets/Chihiro-caminhando8.png"
export default class App extends React.Component{
  state={
    num:0,
    frames:[{img:Frame1},{img:Frame2},{img:Frame3},{img:Frame4},{img:Frame5},{img:Frame6},{img:Frame7},{img:Frame8},
    ]
  }
  count =()=>{ 
    setInterval(()=>{this.setState({
    num:this.state.num < 7?this.state.num + 1: 0
  })},140)
}
  render(){
    return(
      <div>
       <h3>{this.state.num}</h3>
       <button onClick={this.count}>start</button> 
       <div>
         <img src={this.state.frames[this.state.num].img}/>
       </div>
      </div>
    )
  }
}