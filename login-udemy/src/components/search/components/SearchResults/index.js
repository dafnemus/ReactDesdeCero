import SearchResultsItem from './SearchResultsItem';
import './styles.css';

export default function SearchResults({ results, isSearching }) {
  return (
    <div>
      {!results.length && isSearching && <p>No existen resultados</p>}
      {results.map((data) => {
        return <SearchResultsItem data={data} key={data.id} />;
      })}
    </div>
  );
}
