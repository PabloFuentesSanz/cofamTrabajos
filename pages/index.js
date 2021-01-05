import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cofam Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <form action="">
          <input type="mail" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <button className={styles.button}>Enviar</button>
        </form>
      </main>
    </>
  );
}
