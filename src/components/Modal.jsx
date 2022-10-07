import ImgClose from "../images/bx-x.svg"
import ImgGmail from "../images/gmail-logo.png"
import ImgLinked from "../images/linkedin-logo.png"
import ImgTikTok from "../images/tiktok-logo.png"
import ImgGit from "../images/github-logo.svg"

const Modal = ({setModal}) => {
  
  const handleModal = () => {
    setModal(false)
  }
  
  return (
    <div>
        
        <div className="modal">

        <img 
          src={ImgClose} 
          alt="close" 
          id="button-close" 
          onClick={handleModal}/>

        <div className="modal-buttons-menu">
            <div className="button-ppl"><a href="#aboutme">About me</a></div>
            <div className="button-ppl"><a href="#faq">FAQ</a></div>
            <div className="button-ppl"><a href="#projects">Projects</a></div>
            <div className="button-ppl"><a href="#education">Education</a></div>
            <div className="button-ppl"><a href="#contact">Contact</a></div>

            <div className="social-media w-full">
                <a href=""><img src={ImgGmail} alt="gmail" id="gmail"/></a>
                <a href=""><img src={ImgLinked} alt="linkedin" id="linkedin"/></a>
                <a href=""><img src={ImgTikTok} alt="tiktok" id="tiktok"/></a>
                <a href=""><img src={ImgGit} alt="github" id="github"/></a>
            </div>
        </div>
      </div>


    </div>
  )
}




export default Modal
