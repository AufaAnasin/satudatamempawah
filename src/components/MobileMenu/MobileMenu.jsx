import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.css';

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <div className={styles['toggle-icon']} onClick={toggleMenu}>
                {/* Toggle icon */}
                {isOpen ? <><img src="/src/assets/logo.png" alt="" /></> : <><img src="/src/assets/logo.png" alt="" /></>}
            </div>
            {/* Conditionally render menu links based on isOpen state */}
            {isOpen && (
                <div className={styles['menu-links']}>
                    <Link to="/">Utama</Link>
                    <Link to="/page1">Dataset</Link>
                    <Link to="/page2">Organisasi</Link>
                    <Link to="/about">Tentang</Link>
                </div>
            )}
        </div>
    );
}

export default MobileMenu;
