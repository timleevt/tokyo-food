import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  // TODO: Handle Signin/Login feature
  const [signedIn, setSignedIn] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="#">
        TB
      </Link>
      <nav>
        <a className={styles.navBtn} href="#">
          <div className={styles.navItem}>Home</div>
        </a>
        {signedIn ? (
          <>
            <a className={styles.navBtn} href="#">
              <div className={styles.navItem}>Profile</div>
            </a>
            <a className={styles.navBtn} href="#">
              <div
                className={styles.navItem}
                onClick={() => setSignedIn(false)}
              >
                Logout
              </div>
            </a>
            <a className={styles.navBtn} href="#">
              <div className={styles.postBtn}>Post</div>
            </a>
          </>
        ) : (
          <>
            <a className={styles.navBtn} href="#">
              <div className={styles.navItem} onClick={() => setSignedIn(true)}>
                Login
              </div>
            </a>
            <a className={styles.navBtn} href="#">
              <div className={styles.navItem}>Apply</div>
            </a>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
