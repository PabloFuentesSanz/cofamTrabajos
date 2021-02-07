import Head from "next/head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser"
import { setObra} from "../../firebase/client.js";
import { useState } from "react";

export default function NuevaObra() {
  const user = useUser();
  const router = useRouter();

  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')

  const submitValue = () => {
    setObra({ nombre, direccion});
  }

  return (
    <>
      <Head>
        <title>Cofam Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <h4 className={styles.h4}>Nueva Obra</h4>

        <input placeholder="Nombre de la obra" value={nombre} onChange={e => setNombre(e.target.value)}></input>
        <input placeholder="Dirección" value={direccion} onChange={e => setDireccion(e.target.value)}></input>
        <input type="date" placeholder="Fecha Inicio"></input>
        <input type="date" placeholder="Fecha Fin"></input>
        <hr />
        <button onClick={submitValue}>Enviar</button>
      </main>
    </>
  );
}
