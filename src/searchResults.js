import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    <div>

      {error && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
    <div>
      {data.recipes.map(item =>(
        <div key={item._id} >
          <div>
      <p> <img alt={item.title} src={item.image_url}/><Link to={`/recipe/${item.recipe_id}`}>{item.title}</Link><br/> 
               Social Rank: {item.social_rank} <br/> 
               Publisher: {item.publisher}</p>
         <br/>
          </div>
        </div>
      ))}
    </div>
)}
    </div>
  );
}

export default SearchResults;