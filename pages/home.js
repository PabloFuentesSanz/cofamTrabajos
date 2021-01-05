import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import firebase from "../firebase/client";
import { useState } from "react";
import { useRouter } from "next/router";


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Cofam Trabajos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        home
      </main>
    </>
  );
}
