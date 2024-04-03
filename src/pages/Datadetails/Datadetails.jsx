import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import style from './Datadetails.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';

function Datadetails() {
    const location = useLocation();
    const [name, setName] = useState();
    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const name = searchParams.get('name');
        setName(name);

        const fetchData = async () => {
            try { 
                let apiUrl = `http://satudata.mempawahkab.go.id/api/3/action/package_show?id=${name}`;
                if (name) {
                    const response = await axios.get(apiUrl);
                    setData(response.data.result || []);
                }
            } catch(error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
            }
        };
        fetchData();
    }, [location.search]);

    // Check if data exists and has resources before accessing its properties
    const resourceId = data?.resources && data.resources.length > 0 ? data.resources[0].id : null;
    console.log("ID", resourceId);

    return (
        <>
            <Navbar />
            <MobileMenu />
            <div className={`container ${style.dataDetailsWrapper}`}>
                <div className="row">
                    <div className={style.dataTitle}>
                        <h3>{data?.title}</h3>
                        <p>{data?.notes}</p>
                        <p>dibuat oleh {data?.author}</p>
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
                            {error ? (
                                <div className={style.error}>{error}</div>
                            ) : (
                                <div className="table-container">
                                    {data.extras && data.extras.length > 0 ? (
                                        <table>
                                            <tbody>
                                                {data.extras.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.key}</td>
                                                        <td>{item.value}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <div>Tidak ada data extra tersedia.</div>
                                    )}
                                </div>
                            )}
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
