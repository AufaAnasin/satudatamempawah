import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ItemCard from '../../components/ItemCard/ItemCard';
import './SearchResult.modul.css';

function Search() {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParam = searchParams.get('query');
    setQuery(queryParam);

    if (queryParam) {
      const api = `http://satudata.mempawahkab.go.id/api/3/action/package_search?q=${queryParam}`;
      axios.get(api)
        .then((res) => {
          setData(res.data.result?.results || []);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [location.search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParams = new URLSearchParams();
    searchParams.append('query', query);
    const queryString = searchParams.toString();
    window.location.search = queryString;
  };

  return (
    <div className="container result">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search data result ... "
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          <img src="src\assets\search.png" alt="Search" />
        </button>
      </form>
      {error && <p className="error-message">Error: {error}</p>}
      {query && <p className='query-count'>Menampilkan {data.length} Hasil dari "{query}"</p>}
      <div className="table-container">
         {data && data.map((item) => (
          <ItemCard key={item.id} author={item.author} title={item.title} notes={item.notes} name={item.name} />
         ))}
      </div>
    </div>
  );
}

export default Search;
