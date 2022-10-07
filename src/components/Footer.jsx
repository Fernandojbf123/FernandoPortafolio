import ImgGmail from "../images/gmail-logo.png"
import ImgLinked from "../images/linkedin-logo.png"
import ImgTikTok from "../images/tiktok-logo.png"



const Footer = () => {
  return (

    <div className="footer" id="contact">
        
        <div className="md:w-2/5 md:h-full w-5/6 h-5/6 flex flex-row justify-between items-center m-auto">
            
            <div className="w-full">
                <h2 className="text-white text1 md:text-5xl text-2xl font-bold">Fernando Bello Fuentes</h2>
                <p className="text-white text1 md:text-2xl text-base">Cellphone: +526461979027</p>
                <p className="text-white text1 md:text-2xl text-base" >email: fernandojbf123@gmail.com</p>
            </div>

            <div className="flex flex-col">
                <div className='social-media flex flex-row gap-5 mb-3'>
                    <a href = "mailto:fernandojbf123@gmail.com"><img src={ImgGmail} alt="emailtofernando"/></a>
                    <a href="https://www.linkedin.com/in/fernando-bello-6b5160250/"><img src={ImgLinked} alt="Linkedin"/></a>
                    <a href="https://www.tiktok.com/@soyfernandobello"><img src={ImgTikTok} alt="Tiktok"/></a>
                </div>
                <p className='text-white text1 text-1xl'>This webpage was built using React</p>
            </div>
        
        </div>

        <div className="footer-bar"></div>

    </div>
  )
}

export default Footer
