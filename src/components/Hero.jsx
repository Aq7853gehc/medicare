"use client";
import React from "react";
import "./Hero.scss";
import { data } from "./CardData";
import Card from "./Card.jsx";
import Header from "./Header";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { MotionConfig, motion } from "framer-motion";
const Hero = () => {
  return (
    <MotionConfig reducedMotion="user">
      <main className="hero-container">
        <Header />
        <section className="wrapper">
          <div className="wrapper-wrapper">
            <div className="text-container">
              <motion.h1
                initial={{
                  scale: "0",
                }}
                animate={{
                  scale: "1",
                }}
                style={{
                  transitionDuration: "2s",
                  transitionBehavior: "ease",
                }}
              >
                Healthcare
              </motion.h1>
            </div>

            <motion.img
              src="/doctor.png"
              alt=""
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />

            <p className="tagline">
              The art of medicine consists in amusing the patient while nature
              cures the disease
            </p>
            <div className="btn_wrapper">
              <motion.button
                className="wrapper_button"
                initial={{
                  x: -10,
                }}
                animate={{
                  x: 0,
                }}
                style={{
                  transition: "all 1s ease-in-out",
                }}
              >
                BOOK NOW
                <span>
                  {" "}
                  <ArrowRightIcon />{" "}
                </span>
              </motion.button>
            </div>
          </div>
        </section>

        <div className="card-container">
          {data.map(({ title, subtitle, icon, color }) => (
            <Card title={title} subtitle={subtitle} icon={icon} color={color} />
          ))}
        </div>
      </main>
    </MotionConfig>
  );
};

export default Hero;
