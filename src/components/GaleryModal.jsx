import React from 'react'
import ImgClose from "../images/bx-x.svg"



const GaleryModal = ({src, setGalModal, info}) => {

    const {client, subcontractor, status, techs, details} = info;
    const handleModal = () => {
      setGalModal(false)
    }



  return (

      <div className="galery-modal">  
        <div className="w-3/5 h-4/5 bg-gray-300 overflow-hidden">


           <img 
                src={ImgClose} 
                alt="close" 
                id="button-close" 
                onClick={handleModal}/>


            <div className="flex flex-row w-full h-full justify-center items-center gap-10">
              <div className='flex flex-col justify-center items-center'>
                <img 
                  src={src} 
                  alt="img" 
                  className='aspect-square'/> 
                <a href=""
                  className='text1 text-2xl hover:text-yellow-600'
                  >Watch demo</a>  
              </div>

              <div className="w-2/3 h-4/5 self-start mt-10 overflow-y-scroll relative">

                <table className='w-full'>
                  <tbody>
                    <tr>
                      <td className="w-1/4 text2 text-2xl text">Client:{' '}</td>
                      <td className="px-2 w-3/4 text1 text-1xl">{client}</td>
                    </tr>
                    <tr>
                      <td className="w-1/4 text2 text-2xl">Subcontractor:{' '}</td>
                      <td className="px-2 w-3/4 text1 text-1xl">{subcontractor}</td>
                    </tr>
                    <tr>
                      <td className="w-1/4 text2 text-2xl">Status:{' '}</td>
                      <td className="px-2 w-3/4 text1 text-1xl">{status}</td>
                    </tr>
                    <tr>
                      <td className="w-1/4 text2 text-2xl">Techs:{' '}</td>
                      <td className="px-2 w-3/4 text1 text-1xl">{techs}</td>
                    </tr>
                    <tr>
                      <td className="w-1/4 text2 text-2xl align-top">Details:{' '}</td>
                      <td className="px-2 w-3/4 text1 text-1xl">{details}</td>
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
