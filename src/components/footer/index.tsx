import styles from "./styles/styles.module.css";
import { memo } from "react";

function Footer() {
  return (
    <footer data-testid="footer">
      <div className={styles.copyright}>
        <p>
          2023 Copyright &copy;
          <a
            href="https://tn.linkedin.com/in/asma-ben-ahmedd"
            target="_blank"
            rel="noreferrer"
          >
            Asma Ben Ahmed{" "}
          </a>
        </p>
        <p> Drive Terra - Tech Assesment </p>
      </div>
    </footer>
  );
}

export default memo(Footer);
