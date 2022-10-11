import React, { useEffect } from 'react'
import boy from '../assets/boy3.png'
import styles from '../style'
import AboutTitle from './AboutTitle'
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(()=>{
    AOS.init({
      offset: 400,
      duration: '2000',
      easing: 'linear',
      delay: 1.5
    })
  },[])
  return (
    <>
    <AboutTitle />
      <div className="py-2 text-white   grid sm:grid-cols-2 grid-cols-1 gap-5 md:px-[8rem] px-[2rem] items-center" >
        <div data-aos='zoom-in'>
            <img src={boy} alt="" />
        </div>
        <div data-aos='fade-up'>
            <span className='font-poppins 
          font-normal xs:text-[15px] text-10px xs:leading-[20px]
          leading-15px text-gradient uppercase '>Problem solver</span>
            <h1 className='font-poppins 
          font-semibold xs:text-[25px] text-25px xs:leading-[40px]
          leading-40px text-white'>I enjoy solving problems with clean scalable solutions. I have a genuine passion for inspiring websites.</h1>
            <p className={`${styles.paragraph} mt-[1rem]`}>As a frontend developer i dedicate myself to my clients' project and i make sure my work delivers excellent results on all aspects of my clients' project.</p>
        </div>
      </div>
    </>
  )
}

export default About
