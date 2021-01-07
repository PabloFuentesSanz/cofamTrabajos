import Head from "next/head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser";

export default function diaCalendario() {
  const user = useUser();
  const router = useRouter();

  let { id } = router.query;
  id = id + "";
  let arrayFecha = id.split("-");

  switch (arrayFecha[0]) {
    case "Jan":
      arrayFecha[0] = "Enero";
      break;
    case "Feb":
      arrayFecha[0] = "Febrero";
      break;
    case "Mar":
      arrayFecha[0] = "Marzo";
      break;
    case "Apr":
      arrayFecha[0] = "Abril";
      break;
    case "May":
      arrayFecha[0] = "Mayo";
      break;
    case "Jun":
      arrayFecha[0] = "Junio";
      break;
    case "Jul":
      arrayFecha[0] = "Julio";
      break;
    case "Aug":
      arrayFecha[0] = "Agosto";
      break;
    case "Sep":
      arrayFecha[0] = "Septiembre";
      break;
    case "Oct":
      arrayFecha[0] = "Octubre";
      break;
    case "Nov":
      arrayFecha[0] = "Noviembre";
      break;
    case "Dec":
      arrayFecha[0] = "Diciembre";
      break;
  }

  const handleClickNueva = () => {
    router.replace("/nuevaJornada/" + id);
  };

  const fecha = arrayFecha[1] + " de " + arrayFecha[0] + " de " + arrayFecha[2];
  return (
    <>
      <Head>
        <title>Cofam Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <h4 className={styles.h4}>{fecha}</h4>
        <div>
          <button className={styles.button} onClick={handleClickNueva}>
            Nueva Jornada
          </button>
        </div>
        <div>
          <button className={styles.button}>Ver Jornadas</button>
        </div>
      </main>
    </>
  );
}
