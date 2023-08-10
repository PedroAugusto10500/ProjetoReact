import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../img/iCON-PRO.png';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Box" />
      </Link>
      <div className={styles.navLinks}>
        <Link className={styles.navLink} to="/">
          Home
        </Link>
        <Link className={styles.navLink} to="/projects">
          Projetos
        </Link>
        <Link className={styles.navLink} to="/contact">
          Contato
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
