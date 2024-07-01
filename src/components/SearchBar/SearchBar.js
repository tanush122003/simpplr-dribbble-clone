import React, { useState } from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const tags = [
    { tag: 'tag1', image: 'https://via.placeholder.com/50?text=tag1' },
    { tag: 'tag2', image: 'https://via.placeholder.com/50?text=tag2' },
    // Add more tags as needed
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSuggestions(tags.filter(tag => tag.tag.includes(value)));
  };

  const handleSelect = (tag) => {
    setQuery(tag);
    setSuggestions([]);
    setSearchQuery(tag);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={query}
        onChange={handleChange}
        placeholder="Search by tags..." 
      />
      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map(suggestion => (
            <div 
              key={suggestion.tag} 
              className="suggestion-item"
              onClick={() => handleSelect(suggestion.tag)}
            >
              <img src={suggestion.image} alt={suggestion.tag} />
              <span>{suggestion.tag}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
