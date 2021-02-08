import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import useUser from "../hooks/useUser";

export default function HomePage() {
  const user = useUser();


  return (
    <>
      <Head>
        <title>Cofam Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className={styles.contenedor}>
          <h2>Bienvenido Constantín</h2>
          <br />
          <div>
            <a href="/controlTrabajo"><button className={styles.button} >
              Control de Trabajo
            </button></a>
          </div>
          <div>
            <a href="/obras"><button className={styles.button}>Obras Realizadas</button>
            </a></div>
          <div>
            <a  href="/trabajadores"><button className={styles.button} >Trabajadores</button></a>
          </div>
        </div>
      </main>
    </>
  );
}
