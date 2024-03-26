import React from "react";
import "./Card.scss";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Card = ({ title, subtitle, icon, color }) => {
  return (
    <motion.div
      className="card"
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <h1>{title}</h1>

      <p className="subtitle">{subtitle}</p>
      <img src={icon} alt="" id="card_icon"/>

      <button> <ArrowRightIcon/> </button>
    </motion.div>
  );
};

export default Card;
