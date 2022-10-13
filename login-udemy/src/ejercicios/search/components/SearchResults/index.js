import './styles.css';

export default function SearchResults({ results, isSearching }) {
  return (
    <div>
      {!results.length && isSearching && <p>No existen resultados</p>}
      {results.map((data) => {
        return (
          <div key={data.id} className="search-results">
            <p>Nombre: {data.name}</p>
            <p>Email: {data.email}</p>
          </div>
        );
      })}
    </div>
  );
}
