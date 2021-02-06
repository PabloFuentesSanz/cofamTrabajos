import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import useUser from "../hooks/useUser";

export default function Trabajadores() {
  const user = useUser();

  const route = useRouter();

  const handleClickNuevo = (e) => {
    e.preventDefault();
    route.replace("/nuevoTrabajor");
  };
  const handleVer = (e) => {
    e.preventDefault();
    route.replace("/listaTrabajadores");
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
          <h2>Trabajadores</h2>
          <br /> <br /> <br />
          <div>
            <button className={styles.button} onClick={handleClickNuevo}>Nuevo Trabajador</button>
          </div>
          <div>
            <button className={styles.button} onClick={handleVer}>Ver Trabajadores</button>
          </div>
        </div>
      </main>
    </>
  );
}
