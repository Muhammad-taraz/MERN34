import React, { useState, useEffect } from 'react';
import quotes from '../data/quotes.json';
import QuoteDisplay from '../components/QuoteDisplay';
import QuoteControls from '../components/QuoteControls';

const HomePage = () => {
  const [dailyQuote, setDailyQuote] = useState(null);

  useEffect(() => {
    const savedQuote = JSON.parse(localStorage.getItem('dailyQuote'));
    if (savedQuote) {
      setDailyQuote(savedQuote);
    } else {
      getNewQuote();
    }
  }, []);

  const getNewQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setDailyQuote(randomQuote);
    localStorage.setItem('dailyQuote', JSON.stringify(randomQuote));
  };

  return (
    <div>
      {dailyQuote && <QuoteDisplay quote={dailyQuote} />}
      <QuoteControls quote={dailyQuote} getNewQuote={getNewQuote} />
    </div>
  );
};

export default HomePage;
