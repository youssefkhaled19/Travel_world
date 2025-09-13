import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
function AppNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <NavLink to="cities">Cites</NavLink>
        <NavLink to="countries">countries</NavLink>
      </nav>
    </div>
  );
}

export default AppNav;
