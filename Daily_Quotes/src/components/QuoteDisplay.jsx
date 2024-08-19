import React from 'react';

const QuoteDisplay = ({ quote }) => {
  return (
    <div className="quote-display">
      <p className="quote-text">"{quote.text}"</p>
      <p className="quote-author">- {quote.author || 'Unknown'}</p>
    </div>
  );
};

export default QuoteDisplay;
