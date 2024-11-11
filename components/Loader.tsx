import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import CountUp from "react-countup";
// import NumberCounter from "number-counter";

const Loader = ({ onComplete }:any) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50"
    >
      <motion.h1
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-6xl font-bold bg-clip-text text-transparent animated-gradient"
        >

        M. WALEED AHSAN
      {/* <h1 className="absolute bottom-0 right-0 text-2xl"> */}
      {/* <NumberCounter end={100} delay={0.01} /> */}
      {/* <CountUp start={0} end={100} duration={1} /> */}
      {/* </h1> */}
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
