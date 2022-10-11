import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { navList } from "../data";
import { motion } from "framer-motion";
const Navbar = () => {
    const [active , setActive] = useState(false);
  return (
    <motion.nav 
    initial={{y: -100}}
    animate={{y: 0}}
    transition={{duration: 1.5, delay: 1}}
    className="py-5  flex justify-between md:px-[8rem] px-[2rem] items-center">
      <div className="text-white text-[30px]  font-vesperLibre font-[700] tracking-wide ">
       <h1 className=" text-gradient sticky z-[9]">penuel</h1> 
      </div>
      <ul className="list-none  md:flex  hidden  item-center ">
        {navList.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins
                font-normal
                    cursor-pointer text-[16px]
                     text-white ${
                            index === navList.length - 1
                                ? "mr-0"
                                    : "mr-10"
                                }`}
            >
            <a href={`${nav.id}`}>{nav.name}</a>
          </li>
        ))}
      </ul>
      <div className='md:hidden  flex items-center'>
        
       {
        active ? <CloseIcon className="text-white cursor-pointer  items-center scale-125  z-[9]" onClick={() => setActive(prev => !prev)}  /> : <MenuIcon className="text-white scale-125  cursor-pointer " onClick={() => setActive(prev => !prev)}  /> 
        } 
        <div className={`${active ? 'flex z-[5]  absolute inset-0  h-[100vh] text-center w-full items-center pt-[10rem] bg-black/40 backdrop-blur-md' : 'hidden'}`}>
        <ul className='list-none flex flex-col relative left-[6.5rem] item-center' >
            {
                navList.map((nav, index) => (
                    <li
                        key={index}
                            className={`font-poppins
                                font-normal
                            
                                    cursor-pointer text-[30px]
                                      text-white ${
                                            index === navList.length - 1
                                                ? "mb-0"
                                                    : "mb-10"
                                        }`}
                              >
                              <a href={`${nav.id}`}>{nav.name}</a>
                            </li>
                          ))
            }
        </ul>
        </div>
       
      </div>
    </motion.nav>
  );
};

export default Navbar;
