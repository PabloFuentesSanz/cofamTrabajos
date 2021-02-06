import Head from "next/head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser"
import {setJornada} from "../../firebase/client.js";
import {useState} from "react";
import {getTrabajadores} from "../../firebase/client.js"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'html-react-parser';


export default function NuevaJornada() {
  const user = useUser();
  const router = useRouter();
  const [lista, setLista] = useState('');
  
  let { id } = router.query;

  const fecha = id;
  const [obra, setObra] = useState('');
  const [trabajadores, setTrabajadores] = useState('');
  const [notas, setNotas] = useState('');

  const submitValue = ()=>{
    setJornada({fecha, obra, trabajadores, notas});
  }

  let contenido = ""
  const getTrab= async () => {
      const trabajadores = await getTrabajadores();
      trabajadores.forEach(doc => {
          const { Nombre } = doc.data();
          contenido += `<option value="${Nombre}">${Nombre}</option>`
          setLista(contenido);
      });
  }
  getTrab();
  return (
    <>
      <Head>
        <title>Cofam Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <h4 className={styles.h4}>Nueva Jornada {fecha}</h4>
        <input type="text" placeholder="Seleccionar Obra" value={obra} onChange={e=> setObra(e.target.value)} />
        <select type="text" multiple value={trabajadores}>
          {ReactHtmlParser(lista)}
        </select>
        <textarea placeholder="Notas" rows="10" value={notas} onChange={e=> setNotas(e.target.value)}></textarea>
        <hr />
        <button onClick={submitValue}>Enviar</button>
      </main>
    </>
  );
}
