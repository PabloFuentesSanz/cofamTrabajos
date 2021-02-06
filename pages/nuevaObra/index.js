import Head from "next/head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser"
import { setJornada } from "../../firebase/client.js";
import { useState } from "react";
import { getTrabajadores, getObras} from "../../firebase/client.js"
import Select from 'react-select'
import makeAnimated from 'react-select/animated';




export default function NuevaObra() {
  const user = useUser();
  const router = useRouter();

 
  return (
    <>
      <Head>
        <title>Cofam Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <h4 className={styles.h4}>Nueva Obra</h4>

        <input placeholder="Nombre de la obra"></input>
        <input placeholder="Dirección"></input>
        <input type="date" placeholder="Fecha Inicio"></input>
        <input type="date" placeholder="Fecha Fin"></input>
        <hr />
        <button>Enviar</button>
      </main>
    </>
  );
}
