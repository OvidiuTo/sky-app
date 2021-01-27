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
import './App.css'

class App extends Component{
  render(){
    return <Router>
    <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/404" component={NotFoundPage}/>
    <Route exact path="/map" component={Map}/>
    <Redirect to="/404"/>
    </Switch>
    </Router>
  }
}

export default App;
