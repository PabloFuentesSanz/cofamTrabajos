import Head from "next/head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser"
import { setTrabajador } from "../../firebase/client.js";
import { useState } from "react";
import { getTrabajadores, getObras} from "../../firebase/client.js"
import Select from 'react-select'
import makeAnimated from 'react-select/animated';




export default function NuevoTrabajador() {
  const user = useUser();
  const router = useRouter();
  
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellidos] = useState('')

  const submitValue = () => {
    setTrabajador({ nombre, apellidos});
  }
 
  return (
    <>
      <Head>
        <title>Cofam Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <h4 className={styles.h4}>Nuevo Trabajador</h4>

        <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)}></input>
        <input placeholder="Apellidos" value={apellidos} onChange={e => setApellidos(e.target.value)}></input>
        <hr />
        <button onClick={submitValue}>Enviar</button>
      </main>
    </>
  );
}
