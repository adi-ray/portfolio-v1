"use client";

import { motion } from "motion/react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex gap-14 flex-col-reverse sm:flex-row justify-center items-center">
      <div className="flex flex-col gap-4 md:w-9/12 sm:w-full">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-end gap-2 text-4xl font-bold mb-4"
        >
          Hi! I'm Aditya.{" "}
          <Image src="/hand-icon.svg" width={35} height={35} alt="Hi"></Image>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-base text-gray-800 dark:text-gray-300"
        >
          I'm a Full Stack Web Developer and a Final Year B.Tech IT student at
          IIIT Vadodara. Currently serving as the GDSC Cloud Lead, I'm
          passionate about cloud computing and web technologies. My expertise
          spans frontend, backend, and full-stack development. I love solving
          complex problems, optimizing web performance, and building innovative
          solutions that make an impact.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center md:mb-0"
      >
        <Image
          src="/images/aditya.jpg"
          alt="Aditya"
          width={160}
          height={168}
          className="border-2 border-gray-100 rounded-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Intro;
