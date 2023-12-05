import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -300,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {
  return (
    <motion.div
      className="services  flex  flex-col justify-between  bg-gradient-to-b from-[#0c0c1d] to-[#111132] h-full"
      variants={variants}
      initial="initial"
      // animate="animate"
      whileInView="animate"
    >
      <motion.div
        className="textContanier self-end  flex items-center gap-5 flex-1 sm:self-center sm:text-center sm:flex-col"
        variants={variants}
      >
        <p className="  text-right font-thin text-lg sm:text-center">
          i focus on helping your brand grow <br /> and move forward
        </p>
        <hr className=" w-[500px] sm:w-full  border-0 border-t-[.5px] border-gray-500" />
      </motion.div>
      <TitleContainer />
      <ListContainer />
    </motion.div>
  );
}

export default Services;

function TitleContainer() {
  return (
    <motion.div
      className="titleCont flex-[2] flex flex-col justify-center items-center space-y-5 sm:w-full"
      variants={variants}
    >
      <div className="title  flex gap-9 items-center sm:flex-col sm:text-center sm:gap-5">
        <img
          src="/people.webp"
          alt=""
          className=" w-72 h-24 rounded-full object-cover sm:w-36 sm:h-12"
        />
        <h1 className=" text-8xl font-thin sm:text-4xl">
          <b className=" hover:text-yellow-400 duration-200">Unique </b>Ideas
        </h1>
      </div>
      <div className="title flex gap-9 items-center sm:flex-col sm:text-center sm:gap-5">
        <h1 className=" text-8xl font-thin sm:text-4xl">
          <b className="hover:text-yellow-400 duration-200">For Your</b>{" "}
          Business
        </h1>
        <button className="w-72 h-24 rounded-full bg-yellow-400 text-xl cursor-pointer uppercase text-black sm:w-36 sm:h-12 sm:text-sm">
          What we do?
        </button>
      </div>
    </motion.div>
  );
}

function ListContainer() {
  return (
    <motion.div
      className="listContainer flex-[2] flex max-w-[1366px] mx-auto sm:w-full sm:flex-col"
      variants={variants}
    >
      <motion.div
        className="box"
        whileHover={{ backgroundColor: "lightgray", color: "black" }}
      >
        <h2>Branding</h2>
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          eligendi, culpa quod voluptatibus nulla iste. Praesentium
          necessitatibus quam eos nulla.
        </p>
        <button>Go</button>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ backgroundColor: "lightgray", color: "black" }}
      >
        <h2>Branding</h2>
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          eligendi, culpa quod voluptatibus nulla iste. Praesentium
          necessitatibus quam eos nulla.
        </p>
        <button>Go</button>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ backgroundColor: "lightgray", color: "black" }}
      >
        <h2>Branding</h2>
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          eligendi, culpa quod voluptatibus nulla iste. Praesentium
          necessitatibus quam eos nulla.
        </p>
        <button>Go</button>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ backgroundColor: "lightgray", color: "black" }}
      >
        <h2>Branding</h2>
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          eligendi, culpa quod voluptatibus nulla iste. Praesentium
          necessitatibus quam eos nulla.
        </p>
        <button>Go</button>
      </motion.div>
    </motion.div>
  );
}
