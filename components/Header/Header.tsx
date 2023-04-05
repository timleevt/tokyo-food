import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import PostForm from "../PostForm/PostForm";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ApprovalOutlinedIcon from '@mui/icons-material/ApprovalOutlined';

const Header = () => {
  // TODO: Handle Signin/Login feature
  const [signedIn, setSignedIn] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  return (
    <>
      {showPostModal && (
        <Modal>
          <PostForm handleClose={setShowPostModal}></PostForm>
        </Modal>
      )}
      <header className={styles.header}>
        <Link className={styles.logo} href="#">
          TB
        </Link>
        <nav>
          <a className={styles.navBtn} href="#">
            <HomeOutlinedIcon className={styles.navBtnIcon} />
            <div className={styles.navItemText}>Home</div>
          </a>
          {signedIn ? (
            <>
              <a className={styles.navBtn} href="#">
                <AccountBoxOutlinedIcon className={styles.navBtnIcon} />
                <div className={styles.navItemText}>Profile</div>
              </a>
              <a className={styles.navBtn} href="#">
                <LogoutOutlinedIcon className={styles.navBtnIcon} />
                <div
                  className={styles.navItemText}
                  onClick={() => setSignedIn(false)}
                >
                  Logout
                </div>
              </a>
              {/* <a href="#"> */}
              <div
                className={styles.postBtn}
                onClick={() => setShowPostModal(true)}
              >
                <a href="#" className={styles.postLink}>
                  Post
                </a>
              </div>
              {/* </a> */}
            </>
          ) : (
            <>
              <a className={styles.navBtn} href="#" onClick={() => setSignedIn(true)}>
              <LoginOutlinedIcon className={styles.navBtnIcon} />
                <div
                  className={styles.navItemText}
                >
                  Login
                </div>
              </a>
              <a className={styles.navBtn} href="#">
                <ApprovalOutlinedIcon className={styles.navBtnIcon} />
                <div className={styles.navItemText}>Apply</div>
              </a>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
