import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Getdata(){

    const [data, setdata]= useState([])

async function  getdata() {
    
    const apiurl =  await fetch ("https://fakestoreapi.com/products");
    
    const apidata =  await apiurl.json();
    console.log(apidata)
    setdata(apidata)
}

useEffect(()=>{
    getdata()
},[])


return(
<>
<div>
{
data.map((item, index)=>(
<>
    <h2 key={index}>{item.title}</h2>
<h4>{item.description}</h4>
<h4>{item.price}</h4>
<h4>{item.category}</h4>

</>
))
}


  {/* <div>
    {data.length === 0 ? (
      <h2>Loading...</h2>
    ) : (
      data.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))
    )} 
  </div> */}

</div>
</>
)
}