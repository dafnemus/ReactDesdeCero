import { useState } from 'react';
import SearchBox from './components/SearchBox';
import './style.css';

export default function Search() {
  const [isAtop, setIsAtTop] = useState(false);

  const handleCloseOpenSearchClick = () => setIsAtTop(!isAtop);

  return (
    <div className={`search ${isAtop ? 'searchTop' : 'searchCenter'}`}>
      <SearchBox
        onSearch={handleCloseOpenSearchClick}
        onClose={handleCloseOpenSearchClick}
      />
    </div>
  );
}
