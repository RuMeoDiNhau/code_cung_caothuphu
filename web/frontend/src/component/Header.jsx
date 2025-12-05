// D:\Python\web\component\Header.jsx

import React from 'react';
import styles from '../styles/Header.module.css'; 
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      {/* Container Wrapper để căn giữa nội dung */}
      <div className={styles.headerContentWrapper}>
        <div className={styles.leftSpace}></div>

        <div className={styles.searchContainer}>
            <input type="text" placeholder="Tìm kiếm 🔍" className={styles.searchInput} />
        </div>

        <div className={styles.authContainer}>
            <Link to="/register"><button className={styles.authButton}>Đăng ký</button></Link>
            <Link to="/login"><button className={styles.authButton}>Đăng nhập</button></Link>
            
        </div>
        
      </div>
    </header>
  );
}

export default Header;