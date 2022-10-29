import React from 'react';
import {render} from "react-dom";
import {strictMode} from "react";
import SearchParams from "./SearchParams";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Details from "./Details";


const App = () => {
  return(
    <strictMode>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </strictMode>
  )
}

render(<App />, document.getElementById("root"));
