import React from 'react'
import Skiles from '../components/Skiles';

function About() {
  return (
    <div className='text-center m-3 p-5'>
      <h4 className='text-warning border-bottom border-warning w-25 mx-auto'>About Me</h4>

    <div className='d-flex justify-content-evenly  align-items-start mt-5' >
      <img src='/IMG_2165.JPG' alt="about img"  // warning in img class border  
          className='img-fluid border-start border-bottom border-warning'   style={{width: "80%",maxWidth:'450px', height: "auto", borderRadius: "2%",  }}
        ></img>

        <div className='text-start w-50 ms-5 pt-5'>

          <h1 className='text-light '>Hi There! I'm Abdelhakim Outass</h1>
          <h5 className='text-warning py-2'>Front-end Devloper</h5>
          <p className='w-75 text-justify'>A passionate web developer with experience in creating dynamic and responsive websites. I specialize in front-end development and have a keen eye for design and user experience. My goal is to build websites that not only look great but also perform well across all devices.</p>

          <ul className='list-unstyled mx-auto mt-4'>
            <li className='mb-2'><span className='text-warning fw-bold ' style={{display:'inline-block', width:'120px'}}>Birthday</span>: Apr 19, 2002</li>
            <li className='mb-2'><span className='text-warning fw-bold ' style={{display:'inline-block', width:'120px'}}>Phone</span>: +212 640610072</li>
            <li className='mb-2'><span className='text-warning fw-bold ' style={{display:'inline-block', width:'120px'}}>City</span>: CasaBlanca, Morocco</li>
            <li className='mb-2'><span className='text-warning fw-bold ' style={{display:'inline-block', width:'120px'}}>Language</span>: Arabic, English, French</li>
            <li className='mb-2'><span className='text-warning fw-bold ' style={{display:'inline-block', width:'120px'}}>Email</span>: outasabdelhakim@gmail.com</li>
            <li className='mb-2'><span className='text-warning fw-bold ' style={{display:'inline-block', width:'120px'}}>Freelance</span>: Available</li>

          </ul>
        

        </div>


      </div>
      <Skiles />
      
        
    
    </div>
  )
}

export default About