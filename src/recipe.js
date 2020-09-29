import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

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
          <div className="page">
           <div><h2>{data.title}</h2>
           <h6>SOCIAL RANK:{data.social_rank}</h6>
          <h6>PUBLISHER: {data.publisher}</h6></div>
          <div className="img-text">
          <ul className="list">
            {data.ingredients.map(item=>(
              <li className="ingredients"><div>{item}</div></li>
            ))}
          </ul>
          <img className="single-img" src={data.image_url}/>
          </div>
          </div>
        )
      }
    }

    return(
      <div>
       <div className="nav-bar">
        <h1 className="web-name">WEBSITE NAME</h1>
       </div>
       <div className="background3">{ingredient()}</div>
      </div>
    )
}

export default Recipe;