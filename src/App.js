import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import Main from "./pages/MainPage/Main";
import Voting from "./pages/VotingPage/Voting";
import Breeds from "./pages/BreedsPage/Breeds";
import Gallery from "./pages/GalleryPage/Gallery";

function App() {
  return (
      <div className="App">
          <h1>Hi</h1>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route exact path="/voting" element={<Voting />} />
              <Route exact path="/breeds" element={<Breeds />} />
              <Route exact path="/gallery" element={<Gallery />}/>
              <Route path="*" element={<Navigate replace to="/" />}/>
            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
