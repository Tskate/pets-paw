import React, {useEffect} from "react";
import {Navigate, Route, Routes} from 'react-router-dom';
import styles from './App.module.css';
import Main from "./pages/MainPage/Main";
import Voting from "./pages/VotingPage/Voting";
import Breeds from "./pages/BreedsPage/Breeds";
import Gallery from "./pages/GalleryPage/Gallery";
import WelcomePagePart from "./components/WelcomePagePart/WelcomePagePart";
import ActionBar from "./components/ActionBar/ActionBar";

function App() {
  return (
      <div className={styles.App}>
          <WelcomePagePart />
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/voting" element={<Voting />} />
              <Route path="/breeds" element={<Breeds />} />
              <Route path="/gallery" element={<Gallery />}/>
              <Route path="*" element={<Navigate replace to="/" />}/>
          </Routes>
      </div>
  );
}

export default App;
