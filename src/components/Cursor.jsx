import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="Cursor w-12 h-12 rounded-full border-[1px] border-white fixed z-[999] md:hidden"
      animate={{ x: position.x + 10, y: position.y + 10 }}
    ></motion.div>
  );
}

export default Cursor;
