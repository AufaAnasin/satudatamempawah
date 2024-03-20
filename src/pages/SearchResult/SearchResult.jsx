import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ItemCard from '../../components/ItemCard/ItemCard';
import './SearchResult.modul.css';

function Search() {
  const location = useLocation();
  const [query, setQuery] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    setQuery(query)

    if (query) {
      const api = `http://satudata.mempawahkab.go.id/api/3/action/package_search?q=${query}`;
      axios.get(api)
        .then((res) => {
          setData(res.data.result?.results || []);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location.search]);

  console.log(data);

return (
  <div className="container result">
    <form className="search-form">
      <input
        type="text"
        placeholder="Search data result ... "
        className="search-input"
      />
      <button type="submit" className="search-button">
        <img src="src\assets\search.png" alt="Search" />
      </button>
    </form>
    {query ? <p className='query-count'>Menampilkan {data.length} Hasil dari "{query}"</p> : '' }
    <div className="table-container">
       {/* Item Component goes here later */}
       {data && data.map((item) => (
        <ItemCard key={item.id} author={item.author} title={item.title} notes={item.notes} name={item.name} />
       ))}
    </div>
  </div>
);
}

export default Search;
