

import Header from './components/Header'
import Modal from './components/Modal'
import { useState } from 'react'
import Aboutme from './components/Aboutme'
import FAQ from './components/FAQ'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'


"./images/github-logo.svg"

function App() {

  const [modal, setModal] = useState(false)


  return (


    <div className="w-screen">
    
      <Header 
        setModal={setModal}
      />

      <Aboutme />

      {modal ? 
        <Modal 
          setModal={setModal}/> 
        : ' ' }
      
      <FAQ />

      <Projects />

      <Education />

      <Footer />
    </div>

    )
}

export default App
