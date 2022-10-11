import React from 'react'
import styles from '../style'
const ContactTitle = () => {
  return (
    <div id='contact' className={`${styles.flexCenter} flex flex-col text-white py-[3rem] md:px-[8rem] px-[2rem]`}>
      <h1 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white'>Contact <span className='text-gradient'>Me</span> </h1>
      <p className={`${styles.paragraph}`}>Get in touch</p>
</div>
  )
}

export default ContactTitle
