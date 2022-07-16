import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
function ContriesTable(props) {
 let nevigate=useNavigate()
    const[countries,setCountries]=useState([])
    useEffect(()=>{
        getCountries()
    },[])
    const data=useParams()
    console.log("data",data)
    const getCountries=()=>{
        axios.get("https://restcountries.com/v2//all").then(response=>{
              setCountries(response.data)
              console.log("response",response)
              console.log("countries",countries)
        })
    
    }
    const columns=[{name:"Country name",selector:row=>row.name},
    {name:"Country Native name",selector:row=>row.nativeName},
    {name:"Country Flag",selector:row=><img src={row.flag}/>},
  ]
    return (
        // <DataTable title="Countries List" columns={columns} data={countries} pagination fixHeader
        // fixedHeaderScrollHeight='450px' selectableRows selectableRowsHighlight></DataTable>
        <div>
            hello
            {/* <button onClick={()=>{
                nevigate("/")
            }}>go Back To Home</button> */}
            <button onClick={()=>{
                 nevigate("/contact")
            }}>Go to Home</button>
        </div>
    );
}

export default ContriesTable;