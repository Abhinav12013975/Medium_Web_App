import React, {useState, useEffect} from 'react'
import './Data.css'
function Data() {
    const [data, setData] = useState([])

    useEffect (()=>{
        const fetchApi = async() =>{
            const url =`https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=dd0b5bd561698804de7c028870207633`;
            const response = await fetch (url);
            const data = await response.json();
            setData(data.articles);
            console.log(data);
        }
        
        
        
        fetchApi()
    },[])
  return (
    <div className="container-cnt">
    {/* <img src="components/image.png" alt="" className="image"/> */}
      {
      
        data && data.slice(0,6).map((value)=>(
         <div className="box">
        <div className="image"><img src={value.image} alt="" /></div>
         <a href={value.url}><h1>{value.title}</h1></a>
         </div>
        ))
      }
    </div>
  )
}

export default Data;
