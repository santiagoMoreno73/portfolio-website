import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClass = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <span onClick={selectTab}>
      <p
        className={`cursor-pointer mr-3 font-semibold hover:text-white ${buttonClass}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-1 mr-3"
      ></motion.div>
    </span>
  );
};

export default TabButton;
