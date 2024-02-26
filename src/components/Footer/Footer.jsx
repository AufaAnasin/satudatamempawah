import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className="container">
        <div className={`row ${styles.footerRow}`}>
            <div className="col">
                <div className={styles.leftFooter}>
                    <img src="/topiccard/logo-diskominfo.png" alt="Diskominfo Logo" />
                    <div className={styles.address}>
                        <p><b>Dinas Komunikasi dan Informatika Kabupaten Mempawah</b></p>
                        <p>Jl. Daeng Manambon, Kelurahan Tengah, Kecamatan Terusan</p>
                        <p>Kabupaten Mempawah, Kalimantan Barat, 78911</p>
                        <p><i className="fa-solid fa-phone"></i>0561-826283</p>
                        <p><i className="fa-solid fa-envelope"></i>diskominfo@mempawahkab.go.id</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className={styles.rightFooter}>
                    <p><b>Satu Data Kabupaten Mempawah</b> merupakan kebijakan tata kelola Data pemerintah Kabupaten Mempawah untuk menghasilkan Data yang akurat, mutakhir, terpadu, dan dapat dipertanggungjawabkan, serta mudah diakses dan dibagipakaikan antar Instansi Pusat dan Instansi Daerah.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer