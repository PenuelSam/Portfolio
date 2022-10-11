import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import DoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import wave from "../assets/waving.png";
import boy from "../assets/boy1.png";
import style from "../style";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="py-[3rem] text-white  flex md:flex-row flex-col-reverse md:gap-[6rem] md:px-[8rem] px-[2rem] items-center">
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.5, delay: 1}}
      className=" flex-col md:flex hidden gap-[3rem] ">
        <a
          href="https://www.instagram.com/rawlonii"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon className="cursor-pointer" />
        </a>
        <a
          href="https://www.twitter.com/penuel_Johnson"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/PenuelSam?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className="cursor-pointer" />
        </a>
      </motion.div>
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.5, delay: 1}}
      className="flex md:ml-0 sm:ml-[-15rem] flex-col">
        <div className="flex items-center">
          <h1 className={`${style.heading2} relative`}>Hi! I'm Penuel</h1>
          <motion.div 
          className="absolute md:left-[36rem] left-[36rem] sm:left-[23rem]">
            <img src={wave} alt="" />
          </motion.div>
        </div>

        <div className="flex items-center gap-5">
          <div className="bg-white w-[5rem] h-[0.5px]"></div>
          <h1 className="text-[18px] text-gradient font-poppins">
            Frontend Developer
          </h1>
        </div>
        <div>
          <p className={`${style.paragraph} mt-[1rem]`}>
            I'm a frontend developer based in Nigeria, and i am very{" "}
            <br className="sm:flex hidden" /> passionate and dedicated to my
            work.
          </p>
          <button className="hover:bg-white/50 font-poppins font-semibold mt-[3rem] outline-none bg-secondary text-black hover:text-white px-[5px] py-2 rounded-md">
            Scroll Down <DoubleArrowDownIcon />
          </button>
        </div>
      </motion.div>
      <div className="relative  right-0">
        <div className="flex sm:flex-col-reverse  items-center gap-[1.5rem] ">
          <motion.div 
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           transition={{duration: 1.5, delay: 1}}
          className="flex flex-col sm:flex-row md:hidden gap-[2rem] sm:gap-[5rem] ">
            <a
              href="https://www.instagram.com/rawlonii"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className="cursor-pointer" />
            </a>
            <a
              href="https://www.twitter.com/penuel_Johnson"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className="cursor-pointer" />
            </a>
            <a
              href="https://github.com/PenuelSam?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="cursor-pointer" />
            </a>
          </motion.div>
          <motion.div
            animate={{
              translateY: 20
            }}
            transition={{
              yoyo: Infinity,
              duration: 0.7,
              delay:1.5
            }}
          >
          <img src={boy} alt="" className="w-[100%]" />
          </motion.div> 
        </div>
      </div>
    </div>
  );
};

export default Hero;
