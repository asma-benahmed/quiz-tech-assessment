import styles from "./styles/styles.module.css";
import { memo } from "react";

function Loader() {
  return (
    <div className={styles.loaderContainer} data-testid="loader-container">
      <div className={styles.loader} data-testid="loader"></div>
    </div>
  );
}

export default memo(Loader);
