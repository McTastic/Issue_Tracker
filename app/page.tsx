import styles from "../public/css/homepage.module.css";
import Link from "next/link";
import Login from "./components/login";

export default function Home() {
  return (
    <div className={styles.flex}>
      <div className={styles.leftSide}>
        <h1 style={{ fontSize: "55px" }}>This is home</h1>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.container}>
          {/* <Link className={styles.link} href="/login">Login</Link> */}
          <Link className={styles.link} href="/dashboard">
            Dashboard
          </Link>
          <Login />
          <Link className={styles.signUp} href="/dashboard">Don't have an account?</Link>
        </div>
      </div>
    </div>
  );
}
