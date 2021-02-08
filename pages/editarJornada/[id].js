import Head from "next/head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser"
import { updateJornada, getJornadaByDateObra } from "../../firebase/client.js";
import { useState } from "react";
import { getTrabajadores, getObras } from "../../firebase/client.js"
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

export default function EditarJornada() {
    const user = useUser();
    const router = useRouter();

    let { id } = router.query;
    let array = async () => {
        return await id.split("_");
    }
    const fecha = array[0];
    const obraNombre = array[1];


    const [obra, setObra] = useState(obraNombre);
    const [trabajadores, setTrabajadores] = useState('');
    const [notas, setNotas] = useState('');

    const submitValue = () => {
        updateJornada({ idJornada, fecha, obra, trabajadores, notas });
    }

    const options = []
    const optionsObra = []
    const optionArray = []
    let optionsSelected = ""
    const animatedComponents = makeAnimated();
    let idJornada = "";


    const getJornadaActual = async () => {
        const info = await getJornadaByDateObra(fecha, obraNombre);
        info.forEach(doc => {
            const { Trabajadores, Notas } = doc.data();
            idJornada = doc.id;
            optionsSelected = Trabajadores
            setNotas(Notas)
        })
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

    getTrab();
    getJornadaActual();

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
                <h4 className={styles.h4}>Editar Jornada {fecha}</h4>

                <Select className={styles.select}
                    defaultValue={{ label: obraNombre, value: obraNombre }}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    options={optionsObra}
                    name="obras"
                    onChange={handleChange}
                />

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
