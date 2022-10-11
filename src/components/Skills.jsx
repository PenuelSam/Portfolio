import React, { useEffect } from 'react'
import { skills } from '../data'
import SkillTitle from './SkillTitle'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
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
    <SkillTitle />
        <div  data-aos='zoom-in' className=" text-white grid sm:grid-cols-3 grid-cols-2 gap-5  md:px-[8rem] px-[2rem] items-center">
        {
        skills.map(({tick,title,desc,id})=>(
            <div key={id} className={`items-center flex gap-2`}>
                <span className='text-secondary'>{tick}</span>
                <div>
                    <h1 className='font-poppins 
          font-semibold xs:text-[35px] text-25px xs:leading-[50px]
          leading-40px text-white'>{title}</h1>
                    <p className='font-poppins 
          font-normal xs:text-[15px] text-10px xs:leading-[20px]
          leading-15px text-gradient uppercase '>{desc}</p>
                </div>
            </div>
        ))
      }
      
    </div>
    </>

  )
}

export default Skills
