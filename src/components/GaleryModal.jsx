import React, { useEffect, useState } from 'react'
import ImgClose from "../images/bx-x.svg"



const GaleryModal = ({src, galModal, setGalModal, info}) => {

  const [show,setShow] = useState(false)  
  
  const {client, subcontractor, status, techs, details, linktodemo} = info;
    const handleModal = () => {
      setShow(false)
      setTimeout ( () => {
        setGalModal(false)
      },500)
    }

    
    useEffect ( () => {
      if (galModal) {
        setShow(true)
      }
    },[galModal])

  return (

      <div className={`galery-modal anibefore ${show && 'aniafter'}`}>  
        <div className={`md:w-3/5 md:h-4/5 bg-gray-300 
                        w-full h-full overflow-auto`}>

            <div className="md:flex md:flex-col">

              <div className='flex justify-end'>
                <img 
                  className='bg-white p-2 rounded-full w-10 h-10 cursor-pointer fixed'
                  src={ImgClose} 
                  alt="close" 
                  id="" 
                  onClick={handleModal}/>
              </div>
              
              <div className='w-full flex flex-col justify-center items-center'>
                <img 
                  src={src} 
                  alt="img" 
                  className='img-project aspect-square'/> 
                <a href={linktodemo}
                  className='text1 text-2xl hover:text-yellow-600 cursor-pointer'
                  >Watch demo</a>  
              </div>

              <div className="md:w-full md:h-4/5 mt-5 md:px-10 px-3 
                              w-full h-full">

                <table className='w-full'>
                  <tbody>
                    <tr>
                      <td className="md:w-1/4 text2 md:text-2xl text-xs">Client:{' '}</td>
                      <td className="px-2 md:w-3/4 text1 md:text-1xl text-xs">{client}</td>
                    </tr>
                    <tr>
                      <td className="md:w-1/4 text2 md:text-2xl text-xs">Subcontractor:{' '}</td>
                      <td className="px-2 md:w-3/4 text1 md:text-1xl text-xs">{subcontractor}</td>
                    </tr>
                    <tr>
                      <td className="md:w-1/4 text2 md:text-2xl text-xs">Status:{' '}</td>
                      <td className="px-2 md:w-3/4 text1 md:text-1xl text-xs">{status}</td>
                    </tr>
                    <tr>
                      <td className="md:w-1/4 text2 md:text-2xl text-xs">Techs:{' '}</td>
                      <td className="px-2 md:w-3/4 text1 md:text-1xl text-xs">{techs}</td>
                    </tr>
                    <tr>
                      <td className="md:w-1/4 text2 md:text-2xl text-xs align-top">Details:{' '}</td>
                      <td className="px-2 md:w-3/4 text1 md:text-1xl text-xs">{details}</td>
                    </tr>
                  </tbody>
                </table>
         
  
              </div> 
            </div>  
        </div>
      </div>
  )
}

export default GaleryModal
