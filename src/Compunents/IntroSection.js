import React from 'react'
 import img from './Ellipse 1.png'
export const IntroSection = () => {
  return (
     <>
     <div className="bigboss"> <div className="innerboss">
            <div className="Intro">
            <p className='jhon'>
        Hi, I am John,
        Creative Technologist
        </p>
        </div>
        <div className="info">
            <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
        </div>
        <div>  
            <button className="button">Download Resume</button>
        </div>
       </div>
        <div className="proficlePic">
            <img src={img} alt="" />
        </div>

        </div>
        

     
     </>
  )
}

export default IntroSection
