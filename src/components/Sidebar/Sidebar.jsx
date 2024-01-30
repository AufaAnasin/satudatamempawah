import React from 'react'
import styles from './Sidebar.module.css'
import logoKab from '../../assets/logo.png'
import { useMenu } from '../../context/MenuContext'
import { Link } from 'react-router-dom'

function Sidebar() {


  const { selectedMenu, setSelectedMenu } = useMenu()
  const handleMenuClick = (menu) => { 
    setSelectedMenu(menu)
  }

  return (
    <div className={styles.sidebar}>
        <img src={logoKab} alt="Logo Kabupaten Mempawah" />
        <div className={styles.menuContainer}>
          <ul className={styles.menu}>
              <li className={`${styles.menuItem} ${selectedMenu == 'menu1' ? styles.selected : ''}`} 
              onClick={() => handleMenuClick('menu1')}><Link><i className="fas fa-house"></i> Beranda</Link></li>

              <li className={`${styles.menuItem} ${selectedMenu == 'menu2' ? styles.selected : ''}`} 
              onClick={() => handleMenuClick('menu2')}><Link><i className="fas fa-graduation-cap"></i> Pendidikan</Link></li>

              <li className={`${styles.menuItem} ${selectedMenu == 'menu3' ? styles.selected : ''}`} 
              onClick={() => handleMenuClick('menu3')}><Link><i className="fas fa-hospital"></i> Kesehatan</Link></li>

              <li className={`${styles.menuItem} ${selectedMenu == 'menu4' ? styles.selected : ''}`} 
              onClick={() => handleMenuClick('menu4')}><Link><i className="fas fa-road-bridge"></i> Infrastruktur</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar