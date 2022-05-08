import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';


const Navigation = () => {
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        marginLeft: '100px',
        marginTop: '10px',
        alignItems: 'center',
    };


    const logoText = {
        marginLeft: '10px',
    };

    return (
        <nav className={`${styles.navbar} container`}>
            <Link style={brandStyle} to="/">
                <img src="/logo-white.png" alt="logo" />
                <span style={logoText}>Discuss</span>
            </Link>
            
        </nav>
    );
};

export default Navigation;
