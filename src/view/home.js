import React, { useState } from "react";
import Phrase from "../components/Phrase";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home__container}>
      <div className={styles.logo__container}>
        <h1 className="animate__animated animate__bounce">Feeling better</h1>
      </div>
      <div className={styles.home__subtitle__container}>
        <span className="animate__animated animate__backInRight">
          Aqui encontraras la frase que te hara sentir mejor
        </span>
        <Phrase />
      </div>
    </div>
  );
};
export default Home;
