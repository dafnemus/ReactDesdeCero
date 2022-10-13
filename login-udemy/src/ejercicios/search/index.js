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
      const searchText = text.toLocaleLowerCase();
      const filteredData = data.filter(
        (value) =>
          value.name.toLocaleLowerCase().includes(searchText) ||
          value.username.toLocaleLowerCase().includes(searchText) ||
          value.email.toLocaleLowerCase().includes(searchText) ||
          value.phone.toLocaleLowerCase().includes(searchText)
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
      <SearchResults />
    </div>
  );
}
