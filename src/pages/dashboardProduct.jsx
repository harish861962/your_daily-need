import React, { useState } from 'react'
import product from '../components/productdata';
import { Link } from 'react-router-dom';


export default function DashboardProduct(){
const [products, setproducts] = useState(product)

return(
    <>
    <nav style={{float:"right", margin:10}}>
      <a href="header"> <Link style={{textDecoration:"none", padding:"10px 15px"}} to="/header">Home</Link></a>
    </nav>
      <table >
        <thead>
          <tr style={{textAlign:"center"}}>
            <th style={{textAlign:"center"}}>ID</th>
            <th style={{textAlign:"center"}}>Desc</th>
            <th style={{textAlign:"center"}}>Image</th>
            <th style={{textAlign:"center"}}>Name</th>
            <th style={{textAlign:"center"}}>Type</th>
            <th style={{textAlign:"center"}}>Old Price</th>
            <th style={{textAlign:"center"}}>New Price</th>
            <th style={{textAlign:"center"}}>Action</th>
          </tr>
        </thead>

        <tbody >
          {products.map((p) => (
            <tr key={p.id}>
              <td style={{textAlign:"center"}}>{p.id}</td>
              <td style={{textAlign:"center"}}>{p.desc}</td>
              <td style={{textAlign:"center"}}>
                <img 
                  src={p.img} 
                  width={70} 
                  alt="img"
                  
                />
              </td>
              <td style={{textAlign:"center"}}>{p.name}</td>
              <td style={{textAlign:"center"}}>{p.prodcttype}</td>
              <td style={{textAlign:"center"}}>₹{p.oldPrice}</td>
              <td style={{textAlign:"center"}}>₹{p.price}</td>
              {/* <Link to="/dashboardProduct/:{id}"><td style={{textAlign:"center"}}><button>Details</button></td></Link> */}
              <td style={{ textAlign: "center" }}>
  <Link to={`/dashboardProduct/${p.id}`}>
    <button>Details</button>
  </Link>
</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
