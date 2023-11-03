import styles from "./Landing.module.css";
import docImage from "../../assets/images/document.png";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <main className={styles.main}>
      <div className={styles.image_box}>
        <img alt="Documentation Image" src={docImage} />
      </div>
      <div className={styles.title}>
        <h1>Get Started Today</h1>
      </div>
      <Link to="/login" className={styles.btn}>
        Get Started
      </Link>
    </main>
  );
}

export default Landing;
