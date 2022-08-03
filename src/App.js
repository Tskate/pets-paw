import React, {createContext, useEffect, useState} from "react";
import {Navigate, Route, Routes} from 'react-router-dom';
import styles from './App.module.css';
import Main from "./pages/MainPage/Main";
import Voting from "./pages/VotingPage/Voting";
import Breeds from "./pages/BreedsPage/Breeds";
import Gallery from "./pages/GalleryPage/Gallery";
import WelcomePagePart from "./components/WelcomePagePart/WelcomePagePart";

function App() {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/breeds",
            {headers:{
                'x-api-key': 'DEMO-API-KEY'}
            })
            .then(res => res.json())
            .then(data => setBreeds(data))
    }, []);

  return (
      <div className={styles.App}>
          <WelcomePagePart />
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/voting" element={<Voting />} />
              <Route path="/breeds" element={<Breeds breeds={breeds}/>} />
              <Route path="/gallery" element={<Gallery breeds={breeds}/>}/>
              <Route path="*" element={<Navigate replace to="/" />}/>
          </Routes>
      </div>
  );
}

export default App;
