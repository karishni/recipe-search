import React, { useState } from 'react';
import SearchResults from './searchResults';
import Recipe from './recipe';
import './style.css'
import { BrowserRouter,Switch,Link,Route } from 'react-router-dom';

function App(){
    return(
        <div>
        <BrowserRouter>
        <Switch>
        <Route path="/search-recipes/" exact component={LandingPage}/>
        <Route path="/:foodName" component={SearchResults}/>
        <Route path="/:id" component={Recipe}/>
        </Switch>
        </BrowserRouter>
        </div>
    )
}

const LandingPage=()=>{

    const [ foodName,setFoodName ]= useState('');

    return(
        <div className="background">
          <div><h1 className="name">WEBSITE NAME</h1></div>
          <div><input type="text" onChange={event => setFoodName(event.target.value)}/></div>
          <div><Link to={`/${foodName}`} >
            <button>SEARCH</button>
          </Link></div>
        </div>
    )
}
export default App;