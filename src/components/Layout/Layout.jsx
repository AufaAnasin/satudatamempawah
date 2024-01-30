import React from 'react'
import Sidebar from '../Sidebar/sidebar'
import styles from './Layout.module.css'

function Layout({children}) {
  return (
    <div className={styles.dashboardContainer}>
        <Sidebar />
        <div className={styles.contentWrapper}>
            {children}
        </div>
    </div>
  )
}
export default Layout