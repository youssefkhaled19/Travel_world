import { Outlet } from "react-router-dom";
import Map from "../components/Map";
import Sidebar from "../components/sidebar";
import styles from "./AppLayOut.module.css";
function AppLayOut() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayOut;
