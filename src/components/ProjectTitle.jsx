import React from 'react'
import styles from '../style'
const ProjectTitle = () => {
  return (
    <div className={`${styles.flexCenter} flex flex-col text-white py-[3rem] md:px-[8rem] px-[2rem]`}>
      <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white'>Projects</h1>
      <p className={`${styles.paragraph}`}>Most recent work</p>
</div>
  )
}

export default ProjectTitle
