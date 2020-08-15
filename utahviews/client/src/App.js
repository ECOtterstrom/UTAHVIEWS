import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from "./pages/Search";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { RecoilRoot } from 'recoil';


function App() {
  return (

    <RecoilRoot>
      <Router >
        <div>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route exact path="/search" component={Search}/>
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/signup' component={SignUp} />
          <Search />
        </div>
      </Router>
      
    </RecoilRoot>

  );
}

export default App;