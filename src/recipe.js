import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './searchResults.css';

function Recipe({ match }){

    const [ data,setData ] = useState({});
    const recipeURL = `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=${match.params.id}`
  
    useEffect(()=>{
        const fetchData =async () => {
          
          await axios(recipeURL)
          .then((res)=>{
            const item = res.data;

            setData(item.recipe);
            
          })
          .catch((error)=>{
            console.log(error);
          })
        };
    
        fetchData();
      }, [recipeURL]);

      const ingredient = () =>{
      if(data.ingredients){
        return(
          <div>
          <ul>
            {data.ingredients.map(item=>(
              <li><div>{item}</div></li>
            ))}
          </ul>
          <img src={data.image_url}/>
          </div>
        )
      }
    }

    return(
    <div>{ingredient()}</div>
    )
}

export default Recipe;