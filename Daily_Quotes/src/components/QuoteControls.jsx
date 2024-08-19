import React from 'react';

const QuoteControls = ({ quote }) => {
  const handleShare = () => {
    const text = `"${quote.text}" - ${quote.author || 'Unknown'}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.text === quote.text)) {
      favorites.push(quote);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Quote added to favorites!');
    } else {
      alert('This quote is already in your favorites!');
    }
  };

  const handleBluetoothShare = async () => {
    if (!navigator.bluetooth) {
      alert('Bluetooth is not supported in your browser. Please use Google Chrome or Microsoft Edge.');
      return;
    }

    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true
      });

      alert(`Connected to ${device.name}`);
      alert('Note: Direct sharing via Bluetooth is not supported in web browsers.');
    } catch (error) {
      console.error('Bluetooth connection failed', error);
      alert('Failed to connect to a Bluetooth device.');
    }
  };

  return (
    <div className="quote-controls">
      <button onClick={handleShare}>Share on WhatsApp</button>
      <button onClick={handleFavorite}>Favorite</button>
      <button onClick={handleBluetoothShare}>Share via Bluetooth</button>
    </div>
  );
};

export default QuoteControls;
