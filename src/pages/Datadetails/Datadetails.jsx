import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import style from './Datadetails.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Datadetails() {
    const location = useLocation();
    const [name, setName] = useState();
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const name = searchParams.get('name');
        setName(name);
    }, [location.search]);

    return (
        <>
            <Navbar />
            <MobileMenu />
            <div className={`container ${style.dataDetailsWrapper}`}>
                <div className="row">
                    <div className={style.dataTitle}>
                        <h3>Kondisi Jalan di Kab. Mempawah tahun 2019</h3>
                        <p>Dataset terkait topik jalan ini dihasilkan oleh Dinas PUPR yang dikeluarkan dalam periode 1 tahun sekali.</p>
                        <p>dibuat oleh Dinas Pekerjaan Umum dan Penataan Ruang</p>
                    </div>
                </div>
                <div className="row">
                    <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
                        <TabList className={style.tabContainer}>
                            <Tab className={`${style.tab} ${activeTab === 0 ? style.active : ''}`}>Grafik</Tab>
                            <Tab className={`${style.tab} ${activeTab === 1 ? style.active : ''}`}>Detail Data</Tab>
                        </TabList>
                        <TabPanel>
                            <div className={style.tabContentContainer}>
                                <h2>Content 1</h2>
                                <p>This is the content for tab 1</p>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="table-container">
                                <table>
                                    <tbody>
                                        {/* Baris 1 */}
                                        <tr>
                                            <td>Definisi Data</td>
                                            <td>prasarana transportasi darat yang meliputi segala bagian jalan, termasuk bangunan pelengkap dan perlengkapannya yang diperuntukkan bagi lalu lintas, yang berada pada permukaan tanah, di atas permukaan tanah, di bawah permukaan tanah dan/atau air, serta di atas permukaan air, kecuali jalan kereta api, jalan lori, dan jalan kabel. </td>
                                        </tr>
                                        {/* Baris 2 */}
                                        <tr>
                                            <td>Waktu Dibuat</td>
                                            <td>January 31, 2024, 9:49 AM </td>
                                        </tr>
                                        {/* Baris 3 */}
                                        <tr>
                                            <td>Terakhir Dibuat</td>
                                            <td>April 21, 2024, 9:49 AM </td>
                                        </tr>
                                        {/* Baris 4 */}
                                        <tr>
                                            <td>Klasifikasi</td>
                                            <td> 1. Baik 2. Rusak Sedang 3. Rusak Ringan 4. Rusak Berat 5. Tidak diketahui </td>
                                        </tr>
                                        {/* Baris 5 */}
                                        <tr>
                                            <td>Konsep</td>
                                            <td>Jalan</td>
                                        </tr>
                                        {/* Baris 6 */}
                                        <tr>
                                            <td>Satuan</td>
                                            <td>Kilometer</td>
                                        </tr>
                                        {/* Baris 7 */}
                                        <tr>
                                            <td>Ukuran</td>
                                            <td>Panjang Jalan</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
                <div className={style.centeredButton}>
                    <Link to="/" className={style.backButton}>Kembali</Link>
                </div>
            </div>
        </>
    );
}

export default Datadetails;
