import React from 'react';

const FavoritesList = ({ favorites }) => {
  if (!favorites || favorites.length === 0) {
    return <p>No favorites added yet.</p>;
  }

  const handleRemove = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    window.location.reload();
  };

  return (
    <div className="favorites-list">
      <h2>Your Favorite Quotes</h2>
      <ul>
        {favorites.map((quote, index) => (
          <li key={index}>
            <p>"{quote.text}" - {quote.author || 'Unknown'}</p>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
