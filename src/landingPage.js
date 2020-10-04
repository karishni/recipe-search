import React, { useState } from 'react';
import SearchResults from './searchResults';
import Recipe from './recipe';
import { BrowserRouter,Switch,Link,Route } from 'react-router-dom';
import './style.css';

function App(){
    return(
        <div>
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/searchresults/:foodName" component={SearchResults}/>
        <Route path="/recipe/:id" component={Recipe}/>
        </Switch>
        </BrowserRouter>
        </div>
    )
}

const LandingPage=()=>{

    const [ foodName,setFoodName ]= useState('');

    return(
        <div className="background">
          <div><h1 className="name">RECIPES<br/> OF<br/> YESTERDAY</h1></div>
          <div><input type="text" onChange={event => setFoodName(event.target.value)}/></div>
          <div><Link to={`/searchResults/${foodName}`} >
            <button className="search-btn">Start Cooking!</button>
          </Link></div>
        </div>
    )
}
export default App;