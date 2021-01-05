import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import useUser from "../hooks/useUser";

export default function Home() {
  const user = useUser();


  return (
    <>
      <Head>
        <title>Cofam Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />

      </main>
    </>
  );
}
