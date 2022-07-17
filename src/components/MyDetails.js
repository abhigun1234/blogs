import axios from 'axios'
import React, { Component } from 'react'
import Data from './data.json'
export default class MyDetails extends Component {
    myDetailsArr=Data
    constructor(){
        console.log("constructor execurted")
        super()
        this.state={productDetails:[]}
        console.log("Data",Data)

   
    }
    greet(str){

        console.log("hello",str)
    }
    setName(_name){
        this.setState({name:_name})

    }
    componentDidMount(){

     axios.get('https://ecomerce-back-end.herokuapp.com/api/addproduct').then(response=>{

     console.log("data",response.data.result)
     this.setState({productDetails:response.data.result})
     console.log("respone productDetails",this.state.productDetails)
     }).catch(error=>{
      console.log("error",error)

     })

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
                        
                        <th>name</th>
                        <th>price</th>
                        <th>description</th>
                       
                    </tr>
                </thead>
                <tbody>

                    {

this.state.productDetails.map((product)=>{

                        return(<tr >
                    
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                          
                        </tr>)
                     })
                    }
                 

                </tbody>

            </table>

     </div>
      
    )
  }
}
