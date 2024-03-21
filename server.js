const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5173;

// Konfigurasi penyimpanan file dengan Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Menyimpan file di dalam direktori 'uploads/'
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // Menyimpan file dengan nama aslinya
  }
});

// Inisialisasi middleware multer
const upload = multer({ storage: storage });

// Mengatur route untuk menerima permintaan upload file
app.post('/upload', upload.single('file'), (req, res) => {
  try {
    // Dapatkan informasi file yang diunggah
    const { filename, mimetype, size } = req.file;
    
    // Lakukan operasi yang diinginkan dengan file yang diunggah
    // Di sini Anda dapat menyimpan informasi file ke database, dll.

    res.status(200).json({ 
      message: 'File berhasil diunggah', 
      filename: filename, 
      mimetype: mimetype, 
      size: size 
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Gagal mengunggah file' });
  }
});

// Server mendengarkan permintaan pada port yang ditentukan
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
