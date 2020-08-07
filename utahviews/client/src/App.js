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
      {/* <Search /> */}
      <Home />
    </div>
     </Router>
  );
}

export default App;
