import styles from "../public/css/homepage.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
    <h1 style={{fontSize:"55px"}}>This is home</h1>
    <div className={styles.container}>
    <Link className={styles.link} href="/login">Login</Link>
    <Link className={styles.link} href="/dashboard">Dashboard</Link>
    </div>
    </div>
  )
}
