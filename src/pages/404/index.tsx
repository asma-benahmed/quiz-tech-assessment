import styles from "./styles/styles.module.css";
import error404 from "../../assets/images/404.jpg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import withRouter from "../../HOC/withRouter";

function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className={styles.content}>
      <img
        className={styles.error404}
        src={error404}
        alt="404"
        data-testid="error-404-image"
      />
      <Button variant="outlined" onClick={goBack}>
        GO BACK TO THE QUIZ
      </Button>
    </div>
  );
}

export default withRouter(NotFound);
