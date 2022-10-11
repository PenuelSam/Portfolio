import React,{useEffect} from "react";
import { projects } from "../data";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./Projects.css";
import ProjectTitle from "./ProjectTitle";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
    <ProjectTitle />
    <div id="portfolio" className="py-2 text-white grid sm:gap-5 sm:grid-cols-2 grid-cols-1 md:px-[8rem] px-[2rem] items-center">
      {projects.map((project) => {
        const { id, image, desc, demo, source } = project;
        return (
          <div  key={id} className="card">
            <div  className="card-inner">
              <div data-aos='fade-up' data-aos-duration="2000" data-aos-easing="linear"
               className="card-front">
                <img src={image} alt="" />
              </div>
              <div  className="card-back bg-discount-gradient">
                <h1>{desc}</h1>
                <div className="flex sm:flex-row flex-col gap-5 justify-between sm:mt-[5rem] mt-[2.5rem]">
                  <a href={demo} target="_blank" rel="noreferrer">
                    <button
                      type="button"
                      className={`py-4 px-6 bg-blue-gradient font-poppins
    font-medium text-[18px] text-primary outline-none  rounded-[10px]`}
                    >
                      Demo
                      <ArrowRightIcon />
                    </button>
                  </a>
                  <a href={source} target="_blank" rel="noreferrer">
                    <button
                      type="button"
                      className={`py-4 px-6 bg-blue-gradient font-poppins
    font-medium text-[18px] text-primary outline-none  rounded-[10px]`}
                    >
                      Souce Code
                      <ArrowRightIcon />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Projects;
