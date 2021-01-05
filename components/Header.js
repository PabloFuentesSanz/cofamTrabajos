import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.jpg" alt="" width="30%"/>
      <h1  className={styles.title}>Tejados Cofam</h1>
    </header>
  );
}
