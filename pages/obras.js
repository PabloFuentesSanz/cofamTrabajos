import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import useUser from "../hooks/useUser";

export default function Obras() {
  const user = useUser();

  const route = useRouter();

  const handleClickNuevaObra = (e) => {
    e.preventDefault();
    route.replace("/nuevaObra");
  };
  const handleVerObras = (e) => {
    e.preventDefault();
    route.replace("/listaObras");
  };

  return (
    <>
      <Head>
        <title>Cofam Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <div className={styles.contenedor}>
          <h2>Obras Realizadas</h2>
          <br /> <br /> <br />
          <div>
            <button className={styles.button} onClick={handleClickNuevaObra}>Nueva Obra</button>
          </div>
          <div>
            <button className={styles.button} onClick={handleVerObras}>Ver las Obras</button>
          </div>
        </div>
      </main>
    </>
  );
}
