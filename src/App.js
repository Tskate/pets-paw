import React, {createContext, useEffect, useState} from "react";
import {Navigate, Route, Routes} from 'react-router-dom';
import styles from './App.module.css';
import Main from "./pages/MainPage/Main";
import Voting from "./pages/VotingPage/Voting";
import Breeds from "./pages/BreedsPage/Breeds";
import Gallery from "./pages/GalleryPage/Gallery";
import WelcomePagePart from "./components/WelcomePagePart/WelcomePagePart";
import BreedDescription from "./pages/BreedsPage/BreedDescription/BreedDescription";
import UploadModalWindow from "./components/GalleryContentBlock/UploadModalWindow/UploadModalWindow";
import {useUploadImage} from "./hooks/useRequests";
import SearchPage from "./pages/AddintionalPages/SearchPage/SearchPage";
import LikesOrDislikesPage from "./pages/AddintionalPages/LikesOrDislikesPage";
import FavouritesPage from "./pages/AddintionalPages/FavouritesPage";
import {headerForJSON} from "./api/data";
import {useTheme} from './hooks/useTheme'

export const UploadModalWindowContext = createContext();

function App() {
    const [breeds, setBreeds] = useState([]);

    const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/breeds",
            {
                headers: headerForJSON
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
              <Route path="/breeds/:breed_id" element={<BreedDescription />} />
              <Route path="/gallery" element={
                  <UploadModalWindowContext.Provider value={{isActive : isModalWindowOpen, setIsActive : setIsModalWindowOpen}}>
                    <Gallery breeds={breeds}/>
                  </UploadModalWindowContext.Provider>}/>
              <Route path="/search/:request" element={<SearchPage breeds={breeds}/>}/>
              <Route path="/likes" element={<LikesOrDislikesPage value={1}/>} />
              <Route path="/dislikes" element={<LikesOrDislikesPage value={0}/>} />
              <Route path="/favourites" element={<FavouritesPage />} />
              <Route path="*" element={<Navigate replace to="/" />}/>
          </Routes>
          <UploadModalWindowContext.Provider value={{isActive : isModalWindowOpen, setIsActive : setIsModalWindowOpen}}>
              <UploadModalWindow uploadImage={useUploadImage}/>
          </UploadModalWindowContext.Provider>
      </div>
  );
}

export default App;
