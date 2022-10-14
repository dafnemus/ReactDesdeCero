import './style.css';

export default function SearchResultsItem({ data }) {
  return (
    <div className="search-results">
      <p>Nombre: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
}
