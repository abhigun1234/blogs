import React, { Component } from 'react'

export default class MyDetails extends Component {
    
    constructor(){
        console.log("constructor execurted")
        super()
        this.state={name:"raju",address:"mumbai"}
   
    }
    greet(str){

        console.log("hello",str)
    }
    setName(_name){
        this.setState({name:_name})

    }
  render() {
    return (
      <div>
       <h1>{this.state.name}</h1>
       <h1>{this.state.address}</h1>
       <button onClick={()=>this.greet("raju")}>ok</button>
       <button onClick={()=>this.setName("shyam")}>changeName</button>
        MyDetails</div>
      
    )
  }
}
