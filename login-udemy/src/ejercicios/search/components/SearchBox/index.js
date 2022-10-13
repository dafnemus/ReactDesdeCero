import { useState } from "react";
import "./style.css";

export default function SearchBox({ onSearch, onClose }) {
  const [searchText, setSearchText] = useState('');

  const handleResetInput = () => {
    setSearchText('');
    onClose();
  };

  return (
    <div className="search-box">
      <h2 className="title">Buscador de personal</h2>
      <div className="search-box-buttons">
        <label>
          <input
            className="search-box-input"
            id="text"
            onChange={({ target: { value }}) => setSearchText(value)}
            value={searchText}
          />
        </label>
        <button onClick={() => onSearch(searchText)}>Buscar</button>
        <button onClick={handleResetInput}>Cerrar</button>
      </div>
    </div>
  );
}
