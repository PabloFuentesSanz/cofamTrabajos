import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { loginWithMail } from "../firebase/client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useUser from "../hooks/useUser";

export default function Home() {
  //Hooks
  const router = useRouter();
  const user = useUser();

  const [data, setData] = useState({
    email: "",
    pass: "",
  });

  useEffect(() => {
    user && router.replace("/home");
  }, [user]);

  //Handles
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    loginWithMail(data.email, data.pass)
      .then((user) => {
        router.replace("/home");
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  //JSX
  return (
    <>
      <Head>
        <title>Cofam Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <form action="">
          <input
            type="mail"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="pass"
            placeholder="Contraseña"
            onChange={handleChange}
          />
          <button className={styles.button} onClick={handleClick}>
            Enviar
          </button>
        </form>
      </main>
    </>
  );
}
