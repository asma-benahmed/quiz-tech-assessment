import styles from "./styles/styles.module.css";
import { memo } from "react";

function Header() {
  return (
    <header className={styles.header} data-testid="header">
      <h2> Quiz</h2>
    </header>
  );
}

export default memo(Header);
