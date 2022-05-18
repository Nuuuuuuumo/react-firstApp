import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../Images/navbar_logo.svg";
import { AuthContext } from "../../../context";

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const navigate = useNavigate();
  
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className={styles.navbar}>
      <div onClick={() => navigate(`/home`)} className={styles.navbar__start}>
        <img src={Logo} alt="" className={styles.navbar__logo} />
        <p className={styles.navbar_text}>RED DOG &trade;</p>
      </div>
      <div className={styles.navbar__end}>
        <div className={styles.navbar__navigation}>
          <NavLink className={styles.navbar__item} to="/posts">
            Posts
          </NavLink>
          <NavLink className={styles.navbar__item} to="/home">
            Home
          </NavLink>
          <NavLink className={styles.navbar__item} to="/quiz">
            Quiz
          </NavLink>
        </div>
      </div>
      <div>
        <div className={styles.navbar__auth}>
          { isAuth
          ?<NavLink onClick={logout} className={styles.navbar__item} to='/login'>Log Out</NavLink>
          :<NavLink className={styles.navbar__item} to='/login'>Log In</NavLink>
          }  
        </div>
      </div>
    </div>
  );
};

export default Navbar;
