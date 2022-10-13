import './styles.css';

export default function SearchResults({ results }) {
  return (
    <div>
      {results.map((data) => {
        return (
          <div key={data.id}>
            <p>{data.name}</p>
            <p>{data.username}</p>
          </div>
        );
      })}
    </div>
  );
}
