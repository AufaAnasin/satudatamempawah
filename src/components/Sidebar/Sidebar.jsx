import React from 'react'
import styles from './Sidebar.module.css'
import logoKab from '../../assets/logo.png'
import { useMenu } from '../../context/MenuContext'
import { NavLink } from 'react-router-dom'

function Sidebar() {


  const { selectedMenu, setSelectedMenu } = useMenu()
  const handleMenuClick = (menu) => { 
    setSelectedMenu(menu)
  }

  const LinkStyle  = { 
    color: "inherit", 
    textDecoration: "none"
  }

  return (
    <div className={styles.sidebar}>
        <img src={logoKab} alt="Logo Kabupaten Mempawah" />
        <div className={styles.menuContainer}>
          <ul className={styles.menu}>

          <NavLink style={LinkStyle} to='/'>
              <li className={`${styles.menuItem} ${selectedMenu == 'menu1' ? styles.selected : ''}`} 
              onClick={() => handleMenuClick('menu1')}><i className="fas fa-house"></i> Beranda</li>
          </NavLink>

          <NavLink style={LinkStyle} to='/pendidikan'>
              <li className={`${styles.menuItem} ${selectedMenu == 'menu2' ? styles.selected : ''}`} 
              onClick={() => handleMenuClick('menu2')}><i className="fas fa-graduation-cap"></i> Pendidikan</li>
          </NavLink>

          <NavLink style={LinkStyle} to='/kesehatan'>
              <li className={`${styles.menuItem} ${selectedMenu == 'menu3' ? styles.selected : ''}`} 
              onClick={() => handleMenuClick('menu3')}><i className="fas fa-hospital"></i> Kesehatan</li>
          </NavLink>

          <NavLink style={LinkStyle} to='/infrastruktur'>
              <li className={`${styles.menuItem} ${selectedMenu == 'menu4' ? styles.selected : ''}`} 
              onClick={() => handleMenuClick('menu4')}><i className="fas fa-road-bridge"></i> Infrastruktur</li>
          </NavLink>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar