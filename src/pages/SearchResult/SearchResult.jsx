import React, { useState } from 'react';
import './SearchResult.modul.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([
    { id: 1, nama: 'Banjir Mempawah', deskripsi: 'data spasial rawan banjir hasil analisis BNPB tahun 2019', dibuat_oleh: 'a', kategori: 'Kesehatan' },
    { id: 2, nama: 'Data Desa Mempawah', deskripsi: 'Data Desa Mempawah Provinsi Kalimantan Barat', dibuat_oleh: 'b', kategori: 'Kesehatan' },
    { id: 3, nama: 'Data GTK Mempawah Hilir', deskripsi: 'Jumlah GTK Mempawah Hilir', dibuat_oleh: 'c', kategori: 'Kesehatan' }
  ]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const results = data.filter(item =>
      item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.dibuat_oleh.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.kategori.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };
  
  return (
    <div className="search-container">
      <h1>Search Result</h1>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search data result ... "
          className="search-input"
        />
        <button type="submit" className="search-button">
          <img src="src\assets\search.png" alt="Search" />
        </button>
      </form>
      <div className="table-container">
        <table>
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result) => (
              <React.Fragment key={result.id}>
                <tr>
                  <td className="transparent-text"><strong>{result.nama}</strong></td>
                  <td className="kategori-column transparent-text" style={{ textAlign: 'right' }}>{result.kategori}</td>
                </tr>
                <tr>
                  <td className="transparent-text">{result.deskripsi}</td>
                  <td className="kategori-column transparent-text"></td>
                </tr>
                <tr>
                  <td className="transparent-text">{result.dibuat_oleh}</td>
                  <td className="kategori-column transparent-text"></td>
                </tr>
                <tr>
                  <td colSpan="2"><hr/></td> {/* Garis horizontal */}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Search;
