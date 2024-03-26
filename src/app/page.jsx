import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import style from "./page.module.css";
const page = () => {
  return (
    <main className={style.container}>
      <Hero />
    </main>
  );
};

export default page;
