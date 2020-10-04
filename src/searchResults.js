import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';


function SearchResults({match}){


  const [ data,setData ] = useState({ recipes:[] });
  const url = `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${match.params.foodName}`;
  const [ error, setError ] = useState(false);

  useEffect(()=>{
    const fetchData =async () => {
      await axios(url)
      .then((res)=>{
        setData(res.data);
        //console.log(data)
        setError(false);
       //https://cors-anywhere.herokuapp.com/
      })
      .catch((error)=>{
        console.log(error);
        setError(true);
      })
    };

    fetchData();
  }, [url]);


  return(
    <div>

      <div className="nav-bar">
      <Link to={"/"}><h1 className="web-name">RECIPES OF YESTERDAY</h1></Link>
      </div>
      {error && 
        <div className="cont">
        <div className="err-con">
        <div className="error">OOPs...<br/><span>Something went wrong</span></div>
        <Link to={"/"}>
        <button className="back-btn">BACK</button>
        </Link>
        </div>
        </div>}
      
        <div className="background2">
    <div className="container">
      {data.recipes.map(item =>(
        <div key={item._id} className="single">
          <img className="search-img" alt={item.title} src={item.image_url}/>
          <div className="link">
            <Link to={`/recipe/${item.recipe_id}`}>{item.title}</Link>
          </div>
        </div>
      ))}
    </div>
    </div>

    </div>
  );
}

export default SearchResults;