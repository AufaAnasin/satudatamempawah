import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import ItemCard from '../../components/ItemCard/ItemCard';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import Navbar from '../../components/Navbar/Navbar';
import './SearchResult.modul.css';

function Search() {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryParam = searchParams.get('q');
    setQuery(queryParam);

    const fetchData = async () => {
      try {
        let apiUrl = 'http://satudata.mempawahkab.go.id/api/3/action/package_search';
        if (queryParam) {
          apiUrl += `?q=${queryParam}`;
        }
        const response = await axios.get(apiUrl);
        setData(response.data.result?.results || []);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [location.search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParams = new URLSearchParams();
    searchParams.append('q', query);
    const queryString = searchParams.toString();
    window.location.search = queryString;
  };

  return (
    <>
      <Navbar />
      <MobileMenu />
      <div className="container result">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search data result ... "
            className="search-input"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            <img src="src\assets\search.png" alt="Search" />
          </button>
        </form>
        {error && <p className="error-message">Error: {error}</p>}
        {query && <p className='query-count'>Menampilkan {data.length} Data</p>}
        <div className="table-container">
          {data.map((item) => (
            <ItemCard key={item.id} author={item.author} title={item.title} notes={item.notes} name={item.name} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Search;
