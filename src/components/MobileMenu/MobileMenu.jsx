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
                {isOpen ? <>&#x2715;</> : <>&#x2630;</>}
            </div>
            {/* Conditionally render menu links based on isOpen state */}
            {isOpen && (
                <div className={styles['menu-links']}>
                    <Link to="/">Dashboard</Link>
                    <Link to="/page1">Dataset</Link>
                    <Link to="/page2">Organisasi</Link>
                    <Link to="/page3">Tentang</Link>
                </div>
            )}
        </div>
    );
}

export default MobileMenu;
