import React, { Component } from 'react'
import Data from './data.json'
export default class MyDetails extends Component {
    myDetailsArr=Data
    constructor(){
        console.log("constructor execurted")
        super()
        this.state={name:"raju",address:"mumbai"}
        console.log("Data",Data)
   
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
     {/* hello
      {
         Data.map(data=>
            <ul>
              <li>{data.fist_name}</li>
            </ul>
         )
   
      } */}
      {/*
        table format 
      */}
       <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>first name</th>
                        <th>last name</th>
                        <th>email</th>
                        <th>gender</th>
                    </tr>
                </thead>
                <tbody>

                    {

Data.map((person)=>{

                        return(<tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.email}</td>
                            <td>{person.gender}</td>
                        </tr>)
                     })
                    }
                 

                </tbody>

            </table>

     </div>
      
    )
  }
}
