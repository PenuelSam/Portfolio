import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '../style';

const Footer = () => {
  return (
    <div className="py-[3rem] flex flex-col justify-center   items-center  text-white  md:px-[8rem] px-[2rem] ">
        <div className='w-[100%] h-[0.1rem] border bg-dimWhite'></div>
      <div className="text-[30px] mt-5 font-vesperLibre font-[700] tracking-wide ">
       <h1 className=" text-gradient sticky z-[9]">penuel</h1> 
      </div>
      <ul className='flex justify-between my-1'>
        <li className='list-none font-poppins
                font-normal
                    cursor-pointer text-[16px]
                     text-white mr-5'><a href="#about">About</a></li>
        <li className='list-none font-poppins
                font-normal
                    cursor-pointer text-[16px]
                     text-white mr-5'><a href="#portfolio">Projects</a></li>
        <li className='list-none font-poppins
                font-normal
                    cursor-pointer text-[16px]
                     text-white '><a href="#skill">Skills</a></li>
      </ul>
      <div className='flex mt-2 gap-[3rem] '>
      <a href="https://www.instagram.com/rawlonii" target="_blank" rel='noreferrer'><InstagramIcon className='cursor-pointer' /></a>
        <a href="https://www.twitter.com/penuel_Johnson" target='_blank' rel='noreferrer'><TwitterIcon className='cursor-pointer'/></a>
        <a href="https://github.com/PenuelSam?tab=repositories" target='_blank' rel='noreferrer'><GitHubIcon className='cursor-pointer'/></a>
      </div>
      <div>
        <p className={`${styles.paragraph} mt-5`}>&copy; Penuel. All rights reserved 2022</p>
      </div>
    </div>
  )
}

export default Footer
