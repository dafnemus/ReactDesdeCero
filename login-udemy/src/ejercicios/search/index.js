import { useState } from 'react';
import SearchBox from './components/SearchBox';
import data from '../../data/users.json';
import './style.css';
import SearchResults from './components/SearchResults';

export default function Search() {
  const [isAtop, setIsAtTop] = useState(false);
  const [results, setResults] = useState([]);

  const handleCloseSearchClick = () => {
    setIsAtTop(false);
    setResults([]);
  };

  const handleSearchClick = (text) => {
    if (data?.length) {
      const searchTextMinus = text.toLowerCase();
      const filteredData = data.filter(
        (value) =>
          value.name.toLowerCase().includes(searchTextMinus) ||
          value.phone.toLowerCase().includes(searchTextMinus) ||
          value.email.toLowerCase().includes(searchTextMinus) ||
          value.username.toLowerCase().includes(searchTextMinus)
      );
      setResults(filteredData);
    }
  };

  return (
    <div className={`search ${isAtop ? 'searchTop' : 'searchCenter'}`}>
      <SearchBox
        onSearch={handleSearchClick}
        onClose={handleCloseSearchClick}
      />
      <SearchResults results={results} />
    </div>
  );
}
