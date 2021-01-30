import React, { Component } from 'react';
import { BrowserRouter as 
  Router,
  Route, 
  Switch, 
  Link, 
  Redirect
} from 'react-router-dom' 

//Pagini ;)
import MainPage from "./pages/index";
import NotFoundPage from "./pages/404";
import Map from "./pages/map";
import Characters from "./pages/characters"
import Items from "./pages/items"
import Lore from "./pages/lore"
import Skilltree from "./pages/skilltree"

import './App.css'

class App extends Component{
  render(){
    return <Router>
    <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/404" component={NotFoundPage}/>
    <Route exact path="/map" component={Map}/>
    <Route exact path="/characters" component={Characters}/>
    <Route exact path="/lore" component={Lore}/>
    <Route exact path="/items" component={Items}/>
    <Route exact path="/skilltree" component={Skilltree}/>
    <Redirect to="/404"/>
    </Switch>
    </Router>
  }
}

export default App;
