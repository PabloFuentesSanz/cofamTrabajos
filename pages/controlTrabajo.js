import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import useUser from "../hooks/useUser";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ControlTrabajo() {
  const router = useRouter();
  const user = useUser();
  const [value, onChange] = useState(new Date());

  const handleClickDay = (value, event) => {
    let arrayWord = value + "";
    arrayWord = arrayWord.split(" ");
    router.replace("/diaCalendario/"+arrayWord[1] + "-" + arrayWord[2] + "-" +arrayWord[3]);
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
          <h1>Control de Trabajo</h1>
          <Calendar
            onClickDay={handleClickDay}
            className={styles.cal}
            onChange={onChange}
            value={value}
          />
        </div>
      </main>
    </>
  );
}
