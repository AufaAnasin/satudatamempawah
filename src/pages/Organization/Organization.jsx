import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Organization.module.css';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

function Organization() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);

  const getData = async () => { 
    try {
      const api = `http://satudata.mempawahkab.go.id/api/3/action/organization_list`;
      const response = await axios.get(api);
      const transformedData = response.data.result.map(org => {
        let name = org.toLowerCase().replace(/-/g, ' ').split(' ').map((word, index) => {
          // Capitalize all words including the first one except "dan"
          if (word !== 'dan' || index === 0) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
          }
          return word;
        }).join(' '); // Add space between words
        
        // Convert "dprd" to "DPRD"
        name = name.replace(/dprd/g, 'DPRD');
        
        return name;
      });
      setData(transformedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => { 
    getData();
  }, []);

  const backgroundColors = ['#F7F8ED', '#0174BE', '#FFC436', '#0174BE']

  const goToSearch = (orgName) => {
    const convertedString = orgName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/result?q=organization:${convertedString}`)
  }

  console.log(data)

  return (
    <>
      <Navbar />
      <MobileMenu />
      <div className={`container ${styles.organizationContainer}`}>
        <div className="row">
          <div className={`col ${styles.organizationCol}`}>
            {data.map((item, index) => (
              <div key={index} className={styles.organizationWrapper} style={{ backgroundColor: backgroundColors[index % backgroundColors.length], color: index % 2 === 0 ? 'black' : 'white' }}>
                <p>{item}</p>
                <button onClick={() => goToSearch(item)}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>  
      <Footer />
    </>
  );
}

export default Organization;
