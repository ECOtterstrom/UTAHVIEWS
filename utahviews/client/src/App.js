import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Search from "./pages/Search";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";


function App() {
  return (
    <Router >
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LogIn} />
        <Route exact path='/signup' component={SignUp} />
        </div>
      {/* <Search /> */}
     </Router>
  );
}

export default App;
