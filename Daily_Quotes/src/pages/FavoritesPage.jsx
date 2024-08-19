import React from 'react';

const FavoritesPage = ({ favorites, removeFavorite }) => {
  return (
    <div>
      <h2>Your Favorite Quotes</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((quote, index) => (
            <li key={index}>
              <p>"{quote.text}" - {quote.author || 'Unknown'}</p>
              <button onClick={() => removeFavorite(index)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite quotes yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
