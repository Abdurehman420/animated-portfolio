import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Parallex({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      className="parallex  w-full h-full relative flex justify-center items-center overflow-hidden"
      ref={ref}
      style={{
        background:
          type === "services"
            ? " linear-gradient(180deg , #111132 , #0c0c1d) "
            : " linear-gradient(180deg , #111132 , #505064) ",
      }}
    >
      <motion.h1
        style={{ y: yText }}
        className=" text-8xl font-bold sm:text-6xl sm:text-center"
      >
        {type === "services" ? "what we do? " : "what we did?"}
      </motion.h1>
      <motion.div className="mountains z-30 sm:bg-contain sm:bg-no-repeat"></motion.div>
      <motion.div
        className="planets z-20 sm:bg-contain sm:bg-no-repeat"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars z-10"></motion.div>
    </div>
  );
}

export default Parallex;
