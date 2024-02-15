import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Landingpage.module.css'
import HeroSVG from '../../assets/hero.svg'
import TopicCard from '../../components/TopicCard/TopicCard'
import { topicData } from '../../data/data'

function Landingpage() {
  return (
    <>
    <Navbar />
    <section>
      <div className={`container-fluid ${styles.hero}`}>
          <div className="row">
              <div className={`col ${styles.typographCol}`}>
                <div className={styles.typographWrapper}>
                    <h1>Akses Data Mempawah dalam <span>Satu Rumah.</span></h1>
                    <h2><span>800</span> Dataset Tersedia</h2>
                    <div className={styles.inputContainer}>
                      <input type="text" placeholder='Cari Data Publik Kabupaten Mempawah' />
                      <i className={`fa fa-search ${styles.searchIcon}`} />
                    </div>
                </div>
              </div>
              <div className={`col ${styles.ilustration}`}>
                <img src={HeroSVG} alt="Hero" />
              </div>
          </div>
      </div> 
      <div className={styles.topicWrapper}>
        <h3>Topik Data</h3>
        <div className={styles.topicWrapperLayout}>
          {topicData.map((item) => (
            <TopicCard name={item.name} img={item.ilustration} />
          ))}
        </div>
      </div>   
    </section>
    </>
  )
}

export default Landingpage