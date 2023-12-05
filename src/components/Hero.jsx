import { motion } from "framer-motion";

function Hero() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const SliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",

      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <div className="h-[calc(100vh-100px)] bg-gradient-to-b from-[#0c0c1d] to-[#111132]  overflow-hidden relative">
      <div className="wrapper max-w-[1366px] h-full mx-auto">
        <motion.div
          className="details  h-full flex flex-col  justify-center sm:items-center  gap-10 w-1/2 sm:w-full sm:h-1/2"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h3
            variants={textVariants}
            className=" uppercase text-3xl font-bold tracking-widest  text-purple-700 sm:text-xl"
          >
            abdur rahman
          </motion.h3>
          <motion.h1
            variants={textVariants}
            className="  text-7xl sm:text-3xl font-bold"
          >
            {" "}
            Frontend React Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons  space-x-4 ">
            <motion.button
              variants={textVariants}
              className=" p-5 border-2  border-white rounded-md cursor-pointer sm:p-3"
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              className="p-5  bg-white rounded-md text-black  cursor-pointer sm:p-3"
            >
              Contact me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            className=" w-20 "
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingText  text-[50vh] absolute bottom-[-200px] whitespace-nowrap  text-gray-50/10 w-1/2 font-medium "
        variants={SliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imgCont h-full absolute top-0 right-0  sm:w-full sm:h-1/2 sm:top-auto sm:bottom-0 ">
        <img src="hero.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
