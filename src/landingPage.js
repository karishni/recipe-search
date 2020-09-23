import React, { useState } from 'react';
import SearchResults from './searchResults';
import Recipe from './recipe';
import './landingPage.css';
import { BrowserRouter,Switch,Link,Route } from 'react-router-dom';

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
          <h1 className="name">WEBSITE NAME</h1>
          <input type="text" onChange={event => setFoodName(event.target.value)}/>
          <Link to={`/searchResults/${foodName}`} >
            <button>search</button>
          </Link>
        </div>
    )
}
export default App;