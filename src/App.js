import React from "react"; 
import Chihiro from "./components/ChihiroAnimation.js"
import Chronometer from "./components/Chronometer.js"
export default class App extends React.Component{
  render(){
    return(
      <div>
        <Chronometer/>
        <Chihiro/>
      </div>
    )
  }
}