// About.js
import React from 'react';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import Navbar from '../../components/Navbar/Navbar';
import styles from './About.module.css';

function About() {
  return (
    <>
    <Navbar />
    <MobileMenu />
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.header}>Tentang</h1>
        <div className={styles.description}>
          <p><b>Satu Data Kabupaten Mempawah</b> merupakan kebijakan tata kelola data Pemerintah Kabupaten Mempawah untuk menghasilkan data yang akurat, mutakhir, terpadu, dan dapat dipertanggungjawabkan, serta mudah diakses dan dibagipakaikan antar Instansi Pusat dan Instansi Daerah.</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.imageContainer}>
            <img src="/topiccard/logo-diskominfo.png" alt="Diskominfo Logo"/>
          </div>
          <div className={styles.imageText}>
            <p><b>Dinas Komunikasi dan Informatika</b></p>
            <p><b>Kabupaten Mempawah</b></p>
            <p>Jl. Daeng Manambon, Kelurahan Tengah, Kecamatan Terusan</p>
            <p>Kabupaten Mempawah, Kalimantan Barat, 78911</p>
            <p><i className="fa-solid fa-phone"></i> 0561-826283</p>
            <p><i className="fa-solid fa-envelope"></i> diskominfo@mempawahkab.go.id</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
