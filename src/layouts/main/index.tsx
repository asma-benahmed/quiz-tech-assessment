import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

function MainLayout() {
  return (
    <>
      <Header />
      <div className={styles.contentContainer} data-testid="content-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
