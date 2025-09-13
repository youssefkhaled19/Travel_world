import { Outlet } from "react-router-dom";
import Logo from "./logo";
import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      <p>list of citys</p>
      <footer className={styles.footer}>
        <p className="styles.copyright">
          &copy; Copyright{new Date().getFullYear()}
          worldwise inc
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
