import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../style';
import './Contact.css';
import ContactTitle from './ContactTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    useEffect(()=> {
        AOS.init()
    },[])
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9bpinam', 'template_thpypvl', form.current, 'ugiWZrW1eocVFSRh7')
          .then((result) => {
              console.log(result.text);
              console.log('message sent')
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <>
    <ContactTitle />
        <div data-aos='fade-up' data-aos-duration="2000" data-aos-easing="linear"  className=" grid md:grid-cols-2 gap-[5rem] grid-cols-1  text-white  md:px-[8rem] px-[2rem] ">
            <div>
                <h1 className={`font-poppins font-semibold xs:text-[40px] text-[25px] text-center md:mt-[3rem] sm:mt-[5rem] `}>
                    Lets work together on <br className='sm:flex hidden' /> <span className='text-gradient'>your next project</span> 
                </h1>
            </div>

            <form ref={form} onSubmit={sendEmail} className='mx-auto'>
                <label className={`${styles.paragraph} text-[25px]`}>Name</label>
                <input type="text" placeholder='Insert your name' name="user_name" />
                <label className={`${styles.paragraph} text-[25px]`}>Email</label>
                <input type="email" placeholder='Insert your email' name="user_email" />
                <label className={`${styles.paragraph} text-[25px]`}>Project</label>
                <textarea placeholder='Write your project' name="message" />
                <input type="submit" value="Send" />
            </form>
            
        </div>
    </>
  )
}

export default Contact
