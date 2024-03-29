import React from 'react'
import { useState } from "react"

import ProjectsModal from "./ProjectsModal"


import { projectName, techs, details, linktodemo, imgs } from "../data/ProjectsInfo.js"


const Projects = () => {

    const [galModal, setGalModal] = useState(false);
    const [src, setSrc]  = useState('');
    const [info, setInfo] = useState([]);
    
    const handleEnlarge = (e,idx) => {
        setSrc(`/src/images/p${idx}/`)     
        setGalModal(true)
        setInfo({
            "projectName": projectName[idx],
            "techs":techs[idx], 
            "details":details[idx],
            "linktodemo": linktodemo[idx],
        })
        
    }
    

  return (
    <div id="projects"
        className="md:w-3/5 m-auto flex flex-col w-full" >
        <div className="flex-col justify-center align-center">
            <h1 className="md:p-5 md:w-1/4 m-auto bg-yellow-300 rounded-xl text-center text1 text-2xl
                           p-2 w-5/6"> PROJECTS </h1>
        </div>
        

            <div className="mt-10 w-full flex flex-col gap-5
                            md:flex-row flex-wrap md:justify-evenly">
                {imgs.map( ( iimg, idx ) => (
                    <div key={idx} className="flex items-center justify-center">
                                    
                        <img 
                            className="img-project cursor-pointer" 
                            src={iimg} 
                            alt={iimg} 
                            onClick={ (e) => {handleEnlarge(e,idx)}}/>

                        <p className="absolute text1 text-white">Click me for details</p>
                         
                    </div>
                ))}
            
                

            </div>

        {galModal ? 
        <ProjectsModal 
            src={src}
            galModal   = {galModal}
            setGalModal={setGalModal}
            info={info}
        /> : ''}

    </div>
  )
}

export default Projects
