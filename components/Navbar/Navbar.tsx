import Link from "next/link";
import styles from "./Navbar.module.css";
import { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import PostForm from "../PostForm/PostForm";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ApprovalOutlinedIcon from "@mui/icons-material/ApprovalOutlined";
import AddIcon from "@mui/icons-material/Add";
import SignupForm from "../SignupForm/SignupForm";
import LoginForm from "../LoginForm/LoginForm";
import { UserContext } from "@/context/UserContext";

const Navbar = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const msg = useContext(UserContext); // just for testing
  return (
    <>
      {showPostModal && (
        <Modal>
          <PostForm handleClose={setShowPostModal}></PostForm>
        </Modal>
      )}
      {showSignupModal && (
        <Modal>
          <SignupForm handleClose={setShowSignupModal}></SignupForm>
        </Modal>
      )}
      {showLoginModal && (
        <Modal>
          <LoginForm handleClose={setShowLoginModal}></LoginForm>
        </Modal>
      )}
      <header className={styles.header}>
        <a className={styles.logoLink} href="#">
          <div className={styles.logo}></div>
          <div>{msg}</div>
        </a>
        <nav>
          <Link className={styles.navBtn} href="/">
            <HomeOutlinedIcon className={styles.navBtnIcon} />
            <div className={styles.navItemText}>Home</div>
          </Link>
          {signedIn ? (
            <>
              <a className={styles.navBtn} href="#">
                <AccountBoxOutlinedIcon className={styles.navBtnIcon} />
                <div className={styles.navItemText}>Profile</div>
              </a>
              <a
                className={styles.navBtn}
                href="#"
                onClick={() => setSignedIn(false)}
              >
                <LogoutOutlinedIcon className={styles.navBtnIcon} />
                <div className={styles.navItemText}>Logout</div>
              </a>
              {/* <a href="#"> */}
              <div
                className={styles.postBtn}
                onClick={() => setShowPostModal(true)}
              >
                <a href="#" className={styles.postLink}>
                  <span className={styles.postLinkTxt}>Post</span>
                  <div className={styles.addIconWrapper}>
                    <AddIcon
                      className={styles.addIcon}
                      style={{ height: "100%" }}
                    />
                  </div>
                </a>
              </div>
            </>
          ) : (
            <>
              <a
                className={styles.navBtn}
                href="#"
                onClick={() => setShowLoginModal(true)}
              >
                <LoginOutlinedIcon className={styles.navBtnIcon} />
                <div className={styles.navItemText}>Login</div>
              </a>
              <a
                className={styles.navBtn}
                href="#"
                onClick={() => setShowSignupModal(true)}
              >
                <ApprovalOutlinedIcon className={styles.navBtnIcon} />
                <div className={styles.navItemText}>SignUp</div>
              </a>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
