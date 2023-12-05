import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <div className="  h-[100px] px-3">
      {/* sidebar  */}
      <Sidebar />
      <div className="  flex justify-between items-center max-w-[1366px] m-auto h-full sm:justify-end ">
        <motion.span
          className=" font-bold sm:hidden"
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          Abdu
        </motion.span>
        <div className="social flex space-x-3 p-5">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
