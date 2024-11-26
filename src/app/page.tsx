"use client";

import { GetInfo } from "./services";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const clickHandle = async () => {
    const data = await GetInfo.post();
    console.log("lfsz", data);
  };
  return (
    <div className={styles.page}>
      <div onClick={clickHandle}>123</div>
    </div>
  );
}
