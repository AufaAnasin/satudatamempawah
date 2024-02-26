import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            // Check if the user has scrolled beyond a certain threshold
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${styles.navbarWrapper} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navbarItems}>
                <div className={styles.logoWrapper}>
                    <img src="/src/assets/logo.png" alt="Logokab" />
                    <div className={styles.logoTextWrapper}>
                        <p>SATU DATA</p>
                        <p>KABUPATEN MEMPAWAH</p>
                    </div>
                </div>
            </div>
            <div className={styles.navbarItems}>
                <div >
                    <ul className={styles.menuList}>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="#">Dataset</a></li>
                        <li><a href="#">Organisasi</a></li>
                        <li><a href="#">Tentang</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
