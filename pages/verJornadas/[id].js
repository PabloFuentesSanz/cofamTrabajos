import Head from "next/head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser"
import { getJornadasByDate } from "../../firebase/client.js"
import { useState, useEffect } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'html-react-parser';

export default function VerJornadas() {
    const user = useUser();
    const router = useRouter();
    const [lista, setLista] = useState('');

    let { id } = router.query;

    const fecha = id;
    let contenido = ""
    const getJornadas = async () => {
        const jornadas = await getJornadasByDate(fecha + "");
        jornadas.forEach(doc => {
            const { Obra } = doc.data();
            contenido += `<a href=""><div style="background-color:#d9d9d9; padding: 3px; border-top:1px solid black; text-align: left">
                            <p>${Obra}</p>
                        </div></a>`
            setLista(contenido);
        });
    }



    getJornadas()

    return (
        <>
            <Head>
                <title>Cofam Trabajos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Navbar />
                <h4 className={styles.h4}>Jornadas {fecha}</h4>
                <div>{ReactHtmlParser(lista)}</div>
            </main>
        </>
    );
}
