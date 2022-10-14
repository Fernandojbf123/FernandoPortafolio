import ImgProfile2 from "../images/aboutme2.png"
import ImgHTML from "../images/html-logo.svg" 
import ImgCSS from "../images/CSS-logo.svg" 
import ImgJS from "../images/javascript-logo.svg" 
import ImgReact from "../images/react-logo.svg" 
import ImgJira from "../images/jira-logo.svg" 
import ImgTailwind from "../images/tailwindcss-logo.svg" 
import ImgGit from "../images/github-logo.svg" 



const Aboutme = () => {

   
  
  return (
    <div id="aboutme" 
        className="w-full my-10 mx-auto flex flex-col
                  md:w-3/5 md:my-20 md:mx-auto md:flex md:flex-col">
            <div className="w-full flex flex-col justify-center text-center
                            md:w-full md:flex md:flex-col md:justify-center md:align-middle">
                <h1 className="p-2 w-5/6 m-auto bg-yellow-300 rounded-xl text-center text1 text-2xl
                               md:p-5 md:w-1/4 md:m-auto md:text-center md:text-2xl"
                               >ABOUT ME</h1>
                <h2 className="p-2 m-auto text-3xl
                               md:p-5 md:text-6xl"
                               >Get to know me</h2>
            </div>
            
            <div className="w-full flex flex-col justify-center align-middle
                            md:flex-row">      
                <div className="w-full flex flex-col justify-center items-center
                                md:w-2/6">
                    <img src={ImgProfile2} alt="aboutme" className="imgaboutme"/>
                    <h1 className="text1 md:text-3xl text-2xl text-underline">1.5 years of experience</h1>

                </div>
                
                <div className="mt-10 w-full flex flex-col justify-center items-center
                                md:w-3/6 md:items-start">
                    <h1 className="md:text-4xl text-2xl font-bold text-gray-600 md:text-left text-center">Hi, I'm <span className="text-underline">Fernando Bello</span></h1>
                    <p className="md:text-2xl font-bold text-gray-600 mt-5 w-4/5">I'm a web developer with great experience <span className="text-underline">REACT</span>, HTML, CSS and JAVASCRIPT. I'm looking to build up a career in Front end Development.</p>
                    <h2 className="mt-5 font-bold md:text-3xl text-2xl">Skills</h2>
                    
                    <div className="w-4/5">

                            <ul className="list-style-none flex flex-row justify-evenly gap-5 my-5 md:ml-10 mx-0 flex-wrap">
                                <li className="highlighted text1">English</li>
                                <li className="highlighted text1">Researcher</li>
                                <li className="highlighted text1">Organized</li>
                                <li className="highlighted text1">Self taught</li>
                            </ul>

                            <ul className="md:ml-16 mx-0 flex flex-row justify-evenly gap-2 aboutme-socialmedia flex-wrap">
                                <li><img src={ImgHTML} alt="" className="mt-5"/></li>
                                <li><img src={ImgCSS} alt="" className="mt-5"/></li>
                                <li><img src={ImgJS} alt="" className="mt-5"/></li>
                                <li><img src={ImgReact} alt="" className="mt-5"/></li>
                                <li><img src={ImgJira} alt="" className="mt-5"/></li>
                                <li><img src={ImgTailwind} alt="" className="mt-5"/></li>
                                <li><img src={ImgGit} alt="" className="mt-5"/></li>
                            </ul>
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default Aboutme
