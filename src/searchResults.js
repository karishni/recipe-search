import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';


function SearchResults({match}){


  const [ data,setData ] = useState({ recipes:[] });
  const url = `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${match.params.foodName}`;
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(false);

  useEffect(()=>{
    const fetchData =async () => {
      setIsLoading(true);
      await axios(url)
      .then((res)=>{
        setData(res.data);
        //console.log(data)
        setError(false);
        setIsLoading(false);
      })
      .catch((error)=>{
        console.log(error);
        setError(true);
      })
    };

    fetchData();
  }, [url]);


  return(
    <div className="background2">

      <div className="nav-bar">
        <h1 className="web-name">WEBSITE NAME</h1>
      </div>

      {error && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
    <div className="container">
      {data.recipes.map(item =>(
        <div key={item._id} className="single">
          <img className="search-img" alt={item.title} src={item.image_url}/>
          <div className="link">
            <Link to={`/${item.recipe_id}`}>{item.title}</Link>
          </div>
        </div>
      ))}
    </div>
)}
    </div>
  );
}

export default SearchResults;