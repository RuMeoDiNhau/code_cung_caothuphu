import React from 'react';
import { NavLink } from "react-router-dom";
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navContentWrapper}>
        <div className={styles.navLinks}>

          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? styles.active : ""}>
            Trang Chủ
          </NavLink>

          <NavLink to="/info"className={({ isActive }) => isActive ? styles.active : ""}> Thông tin</NavLink>

          <NavLink to="/predict" className={({ isActive }) => isActive ? styles.active : ""}>Dự đoán</NavLink>
          <NavLink to="/history" className={({ isActive }) => isActive ? styles.active : ""}>Lịch sử </NavLink>
          <NavLink to="/suggest" className={({ isActive }) => isActive ? styles.active : ""}>Gợi ý</NavLink>
    
        </div>

        <img 
          src="link-co-viet-nam.png" 
          alt="Vietnamese Flag" 
          className={styles.flagIcon} 
        />
      </div>
    </nav>
  );
}

export default Navbar;
