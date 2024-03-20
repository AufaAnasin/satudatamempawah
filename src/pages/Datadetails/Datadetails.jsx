import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
                            <p>Area Helmi</p>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    );
}

export default Datadetails;
