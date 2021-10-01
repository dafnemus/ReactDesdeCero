import { useState } from 'react';
import SearchBox from './components/SearchBox';
import './style.css';

export default function Search() {
  const [isAtop, setIsAtTop] = useState(false);
  const handleSearchClick = () => {};
  const handleCloseClick = () => {};
  return (
    <div className='search'>
      <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick} />
    </div>
  );
}
