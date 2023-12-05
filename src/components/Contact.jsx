import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInVIew = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y03gvyo",
        "template_fuirsv4",
        formRef.current,
        "fI6I_DaVqEDarkILM"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="contact h-full max-w-[1366px] mx-auto flex justify-center items-center gap-12 sm:flex-col sm:w-full"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={ref}
    >
      <motion.div
        className="textContainer space-y-8 flex-1 sm:space-y-4 sm:text-center mt-16"
        variants={variants}
      >
        <motion.h1
          className=" text-8xl font-bold sm:text-4xl"
          variants={variants}
        >
          Let's work together
        </motion.h1>
        <motion.div className="item" variants={variants}>
          <h2 className=" font-bold text-2xl">Mail</h2>
          <span className=" text-gray-400">gintama8020@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2 className=" font-bold text-2xl">Address</h2>
          <span className=" text-gray-400">
            house no 288 sector k-6 street 9
          </span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2 className=" font-bold text-2xl">Phone</h2>
          <span className=" text-gray-400">+92 336 5868020</span>
        </motion.div>
      </motion.div>
      <div className="formContainer flex-1 relative w-[80%] -mt-32">
        <motion.div
          className="phoneSvg absolute m-auto stroke-yellow-400  -z-10"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            width="450px"
            height="450px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={isInVIew && { pathLength: 1 }}
              transition={{ duration: 3 }}
            />
          </svg>
        </motion.div>

        <motion.form
          action=""
          className="form flex flex-col space-y-6  sm:space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="input"
            name="name"
          />
          <input
            type="email"
            placeholder="email"
            required
            className="input"
            name="email"
          />
          <textarea
            rows={8}
            placeholder="Message"
            className="input"
            name="message"
          />
          <button className=" bg-yellow-400 text-black text-lg py-3 rounded-sm">
            Submit
          </button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
