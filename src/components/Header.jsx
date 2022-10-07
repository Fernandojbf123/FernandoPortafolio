
import ImgHam from '../images/bx-menu.svg'
import ImgProfile from "../images/foto3.jpeg"

const Header = ({setModal}) => {

const handleModal = (e) => {
    setModal(true)
}

  return (
      
    <div className="container-header w-screen pb-10 h-auto bg-no-repeat bg-cover bg-fixed bg-center overflow-hidden
                    md:h-full md:w-screen">
    
        <nav className="primary-menu w-screen md:h-12 m-auto fixed min-12 block">
            <div className="md:w-3/5 md:mx-auto my-1 flex flex-row md:items-center md:justify-between
                            w-full">
                <a className="md:w-full w-1/2 text2 text-3xl font-bold" href="">BELLO</a>
                <div className="md:w-full w-1/2 md:mx-auto text1 md:text-2xl font-bold flex flex-row justify-end">
                    <i className='bx bxs-phone'></i>
                    (+52) 646 197 90 27
                    <img 
                        src={ImgHam} 
                        alt="menu-ham"  
                        className='ml-2 hover:cursor-pointer'
                        onClick={handleModal}/>
                </div>
                
            </div>
        </nav>

        <div className="greet md:w-3/5 md:h-auto flex md:flex-row md:justify-between md:items-center md:m-auto
                        h-auto flex-col-reverse items-center justify-center">
            <div className="h-auto flex flex-col my-0">
                    <h1 className="text1 md:text-5xl md:mt-10 text-3xl text-center md:text-left">Hi, I'm a freelancer</h1> 
                    <h2 className="text2 md:text-7xl font-bold md:mt-10 text-3xl text-center md:text-left">FRONTEND DEVELOPER</h2>
                    <p className="text1 md:text-3xl font-black md:mt-10 text-center md:text-left">HTML, CSS, JavaScript, React</p>
            </div>
            <img 
                src={ImgProfile} 
                alt = "Fernando Bello" 
                className='rounded-full inline-block imgprofile'/>

        </div>
    </div>

   
  )
}

export default Header
