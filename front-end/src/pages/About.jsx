import React from 'react'

function About() {
  return (
    <div className='text-center '>
      <p>about me</p>

        <img src='/homeimg.jpg' alt="home img"  // warning in img class border  
          className='img-fluid border-start border-bottom border-warning'   style={{width: "80%",maxWidth:'400px', height: "auto", borderRadius: "2%",
           
          }}
        ></img>

        <div>make the text in the right 
        <p>Hi There! I'm Abdelhakim Outass</p>
        <p>A passionate web developer with experience in creating dynamic and responsive websites. I specialize in front-end development and have a keen eye for design and user experience. My goal is to build websites that not only look great but also perform well across all devices.</p>
        </div>
    
    </div>
  )
}

export default About