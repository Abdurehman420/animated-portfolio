import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/19101334/pexels-photo-19101334/free-photo-of-girl-playing-soccer.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia, sit fugit cupiditate, officia obcaecati doloremque at, vel repudiandae consequuntur sapiente nisi repellat illum incidunt aut quos. Non, quae dolores?",
  },
  {
    id: 2,
    title: "next.js Commerce",
    img: "https://images.pexels.com/photos/8525189/pexels-photo-8525189.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia, sit fugit cupiditate, officia obcaecati doloremque at, vel repudiandae consequuntur sapiente nisi repellat illum incidunt aut quos. Non, quae dolores?",
  },
  {
    id: 3,
    title: "Vanilla js app",
    img: "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia, sit fugit cupiditate, officia obcaecati doloremque at, vel repudiandae consequuntur sapiente nisi repellat illum incidunt aut quos. Non, quae dolores?",
  },
  {
    id: 4,
    title: "music app",
    img: "https://images.pexels.com/photos/18920825/pexels-photo-18920825/free-photo-of-balloons-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia, sit fugit cupiditate, officia obcaecati doloremque at, vel repudiandae consequuntur sapiente nisi repellat illum incidunt aut quos. Non, quae dolores?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container flex items-center justify-center  h-full overflow-hidden">
        <div className="wrapper max-w-[1366px] h-full mx-auto flex items-center justify-center gap-12 sm:flex-col sm:w-full">
          <div
            className="imgCont flex-1  h-1/2 sm:w-full  sm:max-h-72 "
            ref={ref}
          >
            <img
              src={item.img}
              alt=""
              className=" object-cover w-full h-full  sm:p-2"
            />
          </div>
          <motion.div
            className="textContainer flex-1 flex flex-col gap-8  items-start sm:items-center  sm:text-center  sm:!transform-none"
            style={{ y: y }}
          >
            <h2 className=" text-7xl font-bold sm:text-3xl">{item.title}</h2>
            <p className=" text-gray-300 text-xl  sm:text-[16px]">
              {item.desc}
            </p>
            <button className=" bg-yellow-400 text-black rounded-lg  py-2 w-52 cursor-pointer">
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio relative" ref={ref}>
      <div
        className={`progress sticky top-0 left-0 pt-12 text-center sm:pt-[calc(100vh-100px)]`}
      >
        <h1 className=" text-yellow-400 text-4xl font-bold sm:text-2xl">
          Featured Works
        </h1>
        <motion.div
          style={{ scaleX }}
          className="progressBar h-2 bg-white  mt-3 rounded-full"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
