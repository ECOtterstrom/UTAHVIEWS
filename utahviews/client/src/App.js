import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from "./pages/Search";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { RecoilRoot } from 'recoil';
import Favorites from "./pages/Favorites";


function App() {
  return (
    <RecoilRoot>
    
      <Router >
        <div>
          <Nav />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/search" component={Search}/>
          <Route exact path="/favorites" component={Favorites}/>
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/signup' component={SignUp} />
          </Switch>
          
        </div>
      </Router>
      
    </RecoilRoot>

  );
}

export default App;