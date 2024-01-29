import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import BarChart from '../../components/BarChart/Barchart'
import Sidebar from '../../components/Sidebar/sidebar'
import styles from './Dashboard.module.css'

function Dashboard() {

  const dataset = [
    { product: 'Dokter Umum', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
    { product: 'Dokter Gigi', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
    { product: 'Dokter Spesialis', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
  ]
  
  const dimenstion = ['product', '2015', '2016', '2017']

  const datasetsecond = [
    { product: 'Dokter Umum', '2015': 43.2, '2016': 85.2, '2017': 93.7 },
    { product: 'Dokter Gigi', '2015': 83.1, '2016': 73.4, '2017': 52 },
    { product: 'Dokter Spesialis', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
  ]

  //useState 
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  const formattedDate = currentDateTime.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <>
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <div className={styles.contentWrapper}>
        <div className={styles.topbar}>
          <div className="inputContainer">
            <input type="text" placeholder='Cari data apa?' />
          </div>
          <div className={styles.separator} />
        </div>
        <div className="container-fluid">
        <div className={styles.dateSection}>
          <p><b>Beranda</b></p>
          <p>Hari ini, {formattedDate}</p>
        </div>
          <div className="row">
            <div className="col">
              <div className={styles.infoWrapper}>
                <div className={styles.infoBox}>
                      <p>Penduduk</p>
                      <p><b>203.550</b></p>
                      <p>Per Tanggal 31-12-2023</p>
                  </div>
                  <div className={styles.infoBox}>
                      <p>Luas Wilayah</p>
                      <p><b>1,277</b></p>
                      <p>Dalam Kilometer Persegi</p>
                  </div>
              </div>
              <div className={styles.healthWrapper}>
                <p><b>Jumlah Tenaga Kesehatan</b></p>
                <div className={styles.chartWrapper}>
                  <BarChart dimesion={dimenstion} dataset={dataset} />
                </div>  
              </div>
              <div className={styles.infoWrapper}>
                <div className={styles.infoBox}>
                      <p>Pembiayaan Daerah</p>
                      <p><b>IDR8.9M</b></p>
                      <p>Per Tanggal 31-12-2023</p>
                  </div>
                  <div className={styles.infoBox}>
                      <p>Pendapatan Daerah</p>
                      <p><b>10.8M</b></p>
                      <p>Per Tanggal 31-12-2023</p>
                  </div>
              </div>
              <div className={styles.healthWrapper}>
                <p><b>Infrastruktur</b></p>
                <div className={styles.chartWrapper}>
                  <BarChart dimesion={dimenstion} dataset={dataset} />
                </div>  
              </div>
            </div>
            <div className="col">
              <div className={styles.colWrapper}>
              <div className={styles.educationWrapper}>
                <p><b>Pendidikan</b></p>
                <div className={styles.educationBox}>
                  <div className={styles.educationInfo}>
                    <p><b>Jumlah SD</b></p>
                    <p><b>3221 Sekolah</b></p>
                  </div>
                  <div className={styles.educationInfo}>
                    <p><b>Jumlah SD</b></p>
                    <p><b>3221 Sekolah</b></p>
                  </div>
                </div>
                <div className={styles.educationBox}>
                  <div className={styles.educationInfo}>
                    <p><b>Jumlah SD</b></p>
                    <p><b>3221 Sekolah</b></p>
                  </div>
                  <div className={styles.educationInfo}>
                    <p><b>Jumlah SD</b></p>
                    <p><b>3221 Sekolah</b></p>
                  </div>
                </div>
                <div className={styles.educationBox}>
                  <div className={styles.educationInfo}>
                    <p><b>Jumlah SD</b></p>
                    <p><b>3221 Sekolah</b></p>
                  </div>
                  <div className={styles.educationInfo}>
                    <p><b>Jumlah SD</b></p>
                    <p><b>3221 Sekolah</b></p>
                  </div>
                </div>
                <button>Lihat Lebih Lengkap</button>
              </div>
              <div className={styles.dataWrapper}>
              
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard