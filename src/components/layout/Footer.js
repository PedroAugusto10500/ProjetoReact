import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['social-icons']}>
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </div>
      <span className={styles['project-box']}>Project-Box</span> &copy; 2023
    </footer>
  );
}

export default Footer;
