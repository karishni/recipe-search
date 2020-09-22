import React, { useState } from 'react';
import SearchResults from './searchResults';
import Recipe from './recipe';
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
        <div>
        <div>landing page</div>
        <input  
                type="text"
                onChange={event => setFoodName(event.target.value)}/>
        {console.log(foodName)}
        <Link to={`/searchResults/${foodName}`} >
        <button>search</button>
        </Link>
        </div>
    )
}
export default App;