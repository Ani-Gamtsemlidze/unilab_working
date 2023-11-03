import { Link } from "react-router-dom";
import styles from "./Form.module.css";
function Form() {
  const image = localStorage.getItem("image");
  const name = localStorage.getItem("name");
  return (
    <>
      <header className={styles.header}>
        <h1>Form</h1>
        <div className={styles.user}>
          <Link className={styles.card} to="/cards">
            User Cards
          </Link>
          <div className={styles.name}>
            <p>{name}</p>
          </div>
          <div>
            <img src={image} />
          </div>
        </div>
      </header>
      <main></main>
    </>
  );
}

export default Form;
