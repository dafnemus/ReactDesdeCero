import { useState } from 'react';

export default function SearchBox() {
  const [searchText, setSearchText] = useState({
    text: '',
  });

  const handleInputChange = ({ target: { id, value } }) =>
    setSearchText((last) => ({ ...last, [id]: value }));
  return (
    <div>
      <h2 className='title'>Buscador de personal</h2>
      <label>
        <input id='text' onChange={handleInputChange} value={searchText} />
      </label>
      <button>Buscar</button>
    </div>
  );
}
