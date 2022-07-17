// import React, { useEffect } from 'react';
// import Persons from './persondata.json'
// function PersonDetails(props) {
//     useEffect(()=>{
        
//         console.log("data",Persons)
//     })
//     return (
//         <div>
//             <h1>hi</h1>
//             {

//                 Persons.map(person=>
//                     <h1>{person.first_name}</h1>

//                 )
//             }
//         </div>
//     );
// }

// export default PersonDetails;

import React, { Component } from 'react'
import Persons from './persondata.json'
export default class PersonDetails extends Component {

    constructor(){
  console.log("data",Persons)

    }
  render() {
    return (
      <div>PersonDetails</div>
    )
  }
}
