import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import useUser from "../hooks/useUser";

export default function HomePage() {
  const user = useUser();
  const route = useRouter();

  const handleClickTrabajo = (e) => {
    e.preventDefault();
    route.replace("/controlTrabajo");
  };
  const handleClickObras = (e) => {
    e.preventDefault();
    route.replace("/obras");
  };
  const handleClickTrabajadores = (e) => {
    e.preventDefault();
    route.replace("/trabajadores");
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
        <h2>Bienvenido Constantín</h2>
        <br/>
          <div>
            <button className={styles.button} onClick={handleClickTrabajo}>
              Control de Trabajo
            </button>
          </div>
          <div>
            <button className={styles.button} onClick={handleClickObras}>Obras Realizadas</button>
          </div>
          <div>
            <button className={styles.button} onClick={handleClickTrabajadores}>Trabajadores</button>
          </div>
        </div>
      </main>
    </>
  );
}
