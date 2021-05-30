import React, { useState } from "react";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home__container}>
      <div className={styles.logo__container}>
        <h1 className="animate__animated animate__bounce">Feeling better</h1>
      </div>
    </div>
  );
}
