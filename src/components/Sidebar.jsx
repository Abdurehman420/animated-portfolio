import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: {
    clipPath: "circle(1290px at 50px 50px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="sidebar  flex flex-col items-center justify-center  bg-white text-black   "
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="background z-50 fixed top-0 left-0 bottom-0 w-[400px] sm:w-[250px] bg-white"
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}
const variantsForList = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const variantsForListItems = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
function Links() {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.ul
      className="  w-full h-full flex justify-center items-center  flex-col gap-5 "
      variants={variantsForList}
    >
      {items.map((item) => (
        <motion.a
          key={item}
          href={`#${item}`}
          className=" text-2xl sm:text-lg"
          variants={variantsForListItems}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.ul>
  );
}
function ToggleButton({ setOpen }) {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className=" z-50  w-12 h-12 rounded-full fixed top-[27px] left-[38px] bg-transparent cursor-pointer"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}

export default Sidebar;
