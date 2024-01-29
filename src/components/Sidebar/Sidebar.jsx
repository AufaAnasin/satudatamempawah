import React from 'react'
import styles from './Sidebar.module.css'
import logoKab from '../../assets/logo.png'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <img src={logoKab} alt="Logo Kabupaten Mempawah" />
        <div className={styles.menuContainer}>
          <ul className={styles.menu}>
              <li className={styles.menuItem}>Menu 1</li>
              <li className={styles.menuItem}>Menu 2</li>
              <li className={styles.menuItem}>Menu 3</li>
              <li className={styles.menuItem}>Menu 4</li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar