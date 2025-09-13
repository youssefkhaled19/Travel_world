import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import AppLayOut from "../pages/AppLayOut";
import Logo from "./Logo";

function PageNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/Login" className={styles.catLink}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;
