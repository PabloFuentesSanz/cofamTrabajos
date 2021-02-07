import Head from "next/head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser"
import { setJornada } from "../../firebase/client.js";
import { useState } from "react";
import { getTrabajadores, getObras } from "../../firebase/client.js"
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

export default function NuevaJornada() {
  const user = useUser();
  const router = useRouter();

  let { id } = router.query;

  const fecha = id;
  const [obra, setObra] = useState('');
  const [trabajadores, setTrabajadores] = useState('');
  const [notas, setNotas] = useState('');

  const submitValue = () => {
    setJornada({ fecha, obra, trabajadores, notas });
  }

  const options = []
  const optionsObra = []
  const animatedComponents = makeAnimated();

  let contenido = ""
  const getTrab = async () => {
    const trabajadores = await getTrabajadores();
    trabajadores.forEach(doc => {
      const { Nombre } = doc.data();
      const file = { value: Nombre, label: Nombre }
      options.push(file);
    });

    const obras = await getObras();
    obras.forEach(doc => {
      const { Nombre } = doc.data();
      const file = { value: Nombre, label: Nombre }
      optionsObra.push(file);
    });
  }

  getTrab();
  
  const handleChange = selectedOption => {
    setObra(selectedOption.value)
  }

  const handleChangeTrabajadores = selectedOption => {
    setTrabajadores(JSON.stringify(selectedOption));
  }

  return (
    <>
      <Head>
        <title>Cofam Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <h4 className={styles.h4}>Nueva Jornada {fecha}</h4>

        <Select className={styles.select}
          closeMenuOnSelect={false}
          components={animatedComponents}
          options={optionsObra}
          placeholder={'Seleccionar obra'}
          name="obras"
          onChange={handleChange}
        />

        <Select className={styles.select}
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={options}
          placeholder={'Seleccionar trabajadores'}
          name="trabajadores"
          onChange={handleChangeTrabajadores}
        />

        <textarea placeholder="Notas" rows="10" value={notas} onChange={e => setNotas(e.target.value)}></textarea>
        <hr />
        <button onClick={submitValue}>Enviar</button>
      </main>
    </>
  );
}
