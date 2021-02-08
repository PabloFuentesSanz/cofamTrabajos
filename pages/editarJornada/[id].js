import Head from "next/head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser"
import { updateJornada, getJornadaById } from "../../firebase/client.js";
import { useState } from "react";
import { getTrabajadores, getObras } from "../../firebase/client.js"
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

export default function EditarJornada() {
    const user = useUser();
    const router = useRouter();

    let { id } = router.query;
    const obraId = id;


    
    const [fecha, setFecha] = useState('');
    const [trabajadores, setTrabajadores] = useState('');
    const [notas, setNotas] = useState('');
    const [obra, setObra] = useState('');

    const submitValue = () => {
        updateJornada({ obraId, fecha, obra, trabajadores, notas });
    }

    const options = []
    const optionsObra = []
    const optionArray = []
    let optionsSelected = ""
    const animatedComponents = makeAnimated();
    let obraNombre = ""

    const getJornadaActual = async () => {
        const info = await getJornadaById(obraId);

        const {  Fecha, Trabajadores, Notas, Obra } = info.data();
        optionsSelected = Trabajadores
        setNotas(Notas)
        setFecha(Fecha)
        setObra(Obra)

        optionsSelected.forEach((item, i) => {
            const file = { value: optionsSelected[i].value, label: optionsSelected[i].label }
            optionArray.push(file)
        })

    }

  
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
    const handleChange = selectedOption => {
        setObra(selectedOption.value)
    }

    const handleChangeTrabajadores = selectedOption => {
        setTrabajadores(JSON.stringify(selectedOption));
    }

    getTrab();
    getJornadaActual();


    return (
        <>
            <Head>
                <title>Cofam Trabajos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Navbar />
                <h4 className={styles.h4}>Editar Jornada {fecha} </h4>
                <h4>{obra}</h4>

                <Select className={styles.select}
                    placeholder="Clica para ver trabajadores"
                    defaultValue={optionArray}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={options}
                    name="trabajadores"
                    onChange={handleChangeTrabajadores}
                />

                <textarea placeholder="Notas" rows="10" value={notas} onChange={e => setNotas(e.target.value)}></textarea>
                <hr />
                <button onClick={submitValue}>Guardar</button>
            </main>
        </>
    );
}
