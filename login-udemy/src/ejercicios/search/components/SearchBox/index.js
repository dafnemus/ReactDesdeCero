import { useState } from 'react';
import './style.css';

export default function SearchBox({ onSearch, onClose }) {
  const [searchText, setSearchText] = useState({
    text: '',
  });

  const handleInputChange = ({ target: { id, value } }) => {
    setSearchText((last) => ({ ...last, [id]: value }));
  };

  return (
    <div className='search-box'>
      <h2 className='title'>Buscador de personal</h2>
      <div className='search-box-buttons'>
        <label>
          <input
            className='search-box-input'
            id='text'
            onChange={handleInputChange}
            value={searchText.text}
          />
        </label>
        <button onClick={onSearch}>Buscar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
