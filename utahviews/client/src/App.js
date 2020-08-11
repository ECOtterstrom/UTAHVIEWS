import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from "./pages/Search";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Router >
    <div>
      <Nav />
     <Route exact path="/" component={Home}/>
    <Route exact path="/search" component={Search}/>
    {/* <Route exact path="/Trails" component={Trail}/> */}
    </div>
     </Router>
  );
}

export default App;
