import styles from "../../public/css/login.module.css";

export default function Login() {
  return (
    <div className={styles.loginBox}>
      <h2>Login</h2>
      <form>
        <div className={styles.userBox}>
          <input type="text" name="" required />
          <label>Username</label>
        </div>
        <div className={styles.userBox}>
          <input type="password" name="" required />
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}
