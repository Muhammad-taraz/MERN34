import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (quote) => {
    setFavorites([...favorites, quote]);
  };

  const removeFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites.splice(index, 1);
    setFavorites(newFavorites);
  };

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage addToFavorites={addToFavorites} />}
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                removeFavorite={removeFavorite}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
