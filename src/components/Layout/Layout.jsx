import React from 'react'
import styles from './Layout.module.css'
import Sidebar from '../Sidebar/Sidebar'

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