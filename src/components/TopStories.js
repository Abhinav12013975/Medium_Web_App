import React, { useState, useEffect } from "react";
import './TopStories.css'
const TopStories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=BHDozqdi551iHipEmfJLqcwnJUzOGkr8`;
      const response = await fetch(url);
      const value = await response.json();
      setData(value.results);
    };

    fetchApi();
  },[]);
  // const [title,abstract,byline] = [...data]

  return (
    <div className="topstories">
      {data && data.slice(0,6).map((value) => (
      <div className="inside-map">
      <a href={value.url}><h1>{value.title}</h1></a>
      <p>Stories : {value.byline}</p>
      
      </div> 
      ))}
    </div>
  );
};

export default TopStories;
