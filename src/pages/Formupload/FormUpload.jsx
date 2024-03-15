import React, { useState } from 'react';
import axios from 'axios';
import './FormUpload.modul.css'; // Pastikan nama file CSS sesuai

function FormUpload() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi input
    if (!file || !title || !description || !author || !category) {
      setErrorMessage('Semua kolom harus diisi');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('author', author);
    formData.append('category', category);

    try {
      const response = await axios.post('http://localhost:5173/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setSuccessMessage('File berhasil diunggah!'); // Set pesan sukses
    } catch (error) {
      console.error('Error uploading file:', error);
      setErrorMessage('Gagal mengunggah file');
    }
  };

  return (
    <div className="form-container">
      <h2>Form Upload</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label>Judul</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Deskripsi</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Kategori</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-control" required>
            <option value="" disabled>Pilih Kategori</option>
            <option value="Pendidikan">Pendidikan</option>
            <option value="Kesehatan">Kesehatan</option>
            <option value="Infrastruktur">Infrastruktur</option>
          </select>
        </div>
        <div className="form-group">
          <label>File</label>
          <input type="file" onChange={handleFileChange} className="form-control" required />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>} {/* Tampilkan pesan sukses */}
        <button type="submit" className="btn-submit">Upload</button>
      </form>
    </div>
  );
}

export default FormUpload;
  