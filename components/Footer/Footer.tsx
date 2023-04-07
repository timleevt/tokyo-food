import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.footerLink} href="/about">
        about
      </Link>
    </footer>
  );
};

export default Footer;
