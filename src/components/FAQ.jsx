import ImgRA from "../images/right-arrow.png"
import ImgLA from "../images/left-arrow.png"
import { useCallback, useEffect, useState } from "react"


const FAQ = () => {

    const [question, setQuestion] = useState("How many years of experience as Front end Dev do I have?");
    const [answer, setAnswer] = useState("I have 1 year of experience as Front end dev but I've been coding since my childhood using several coding lenguages such as Turbo Pascal, C++, php, Fortran, Matlab.");
    let [idx, setIdx] = useState(0);
    let H = [];
    let p = [];

    H[0]="How many years of experience as Front end Dev do I have?"
    H[1]="Are you willing to learn new techs?"
    H[2]="Are you willing to relocate and do on site work"
    H[3]="What can you tell me about your jobs?"

    p[0]="I have 1 year of experience as Front end dev but I've been coding since my childhood using several coding lenguages such as Turbo Pascal, C++, php, Fortran, Matlab."
    p[1]="I'm always learning. Particularly, coding is always evolving so to keep the pace you need to study everyday."
    p[2]="Yes. My family and I are ready to move if it is needed."
    p[3]="I built a web page for a consultant company called GeoMaya and also built a Condo Manager app for a client of GeoMaya called FincaMex."


  useEffect ( () => {
    
    const interval = setInterval ( () => {
        setQuestion(H[idx])
        setAnswer(p[idx])
        if (idx > 2){
            setIdx(0);
        }
        else {
            setIdx(idx+1);
        }
    },5000)
    return () => clearInterval(interval)
  },[])

  function changeManualLeft () {
    let idxtmp = idx;
    idxtmp = idxtmp-1;
    if (idxtmp < 1){
        setIdx(3);
    }
    else {
        setIdx(idxtmp)
    }
    setQuestion(H[idx])
    setAnswer(p[idx]) 
  }

  function changeManualRight () {
    let idxtmp = idx;
    idxtmp = idxtmp+1;
    if (idxtmp > 2){
        setIdx(0);
    }
    else {
        setIdx(idxtmp)
    }
    setQuestion(H[idx])
    setAnswer(p[idx]) 
  }

  return (
    <div className="my-20 w-full" id="faq">
        <div className="">
            <h1 className="p-2 w-5/6 m-auto bg-yellow-300 rounded-xl text-center text1 text-2xl
                           md:p-5 md:w-1/4 md:m-auto md:text-center md:text-2xl"
                           >FRECUENTLY ASKED QUESTIONS</h1>
        </div>
        <div className="h-56 w-full m-auto flex flex-row justify-center items-center 
                        md:h-56 md:w-3/5">
                <div className="w-1/5">
                    <img className="cursor-pointer m-auto" src={ImgLA} alt="left-arrow" onClick={changeManualLeft}/>
                </div>
                <div className="changer-cointarner-text md:w-3/4 w-full">
                    <h1 className="text1 md:text-3xl text-xl text-gray-600">{question}</h1>
                    <p className="text1 md:text-2xl text-sm text-gray-600">{answer}</p>
                </div>
                <div className="w-1/5">
                    <img className="cursor-pointer m-auto" src={ImgRA} alt="right-arrow" onClick={changeManualRight}/>
                </div>
        </div>
    </div>
  )
}

export default FAQ
