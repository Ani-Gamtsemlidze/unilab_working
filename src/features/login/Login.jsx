import Auth from "../../auth/Auth";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.title}>
          <h1>Get Started</h1>
        </div>
        <p className={styles.paragraph}>add photo</p>
        <Auth />
      </main>
    </div>
  );
}

export default Login;
