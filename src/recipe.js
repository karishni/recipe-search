import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';

function Recipe({ match }){

    const [ data,setData ] = useState({});
    const [ error, setError ] = useState(false);
    const recipeURL = `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=${match.params.id}`
  
    useEffect(()=>{
        const fetchData =async () => {
          
          await axios(recipeURL)
          .then((res)=>{
            const item = res.data;
//https://cors-anywhere.herokuapp.com/
            setData(item.recipe);
            
          })
          .catch((error)=>{
            console.log(error);
            setError(true);
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
       <Link to={"/"}>
        <h1 className="web-name">RECIPES OF YESTERDAY</h1>
        </Link>
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
       <div className="background3">{ingredient()}</div>
      </div>
    )
}

export default Recipe;