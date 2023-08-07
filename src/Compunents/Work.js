import React from 'react'
import {Navbar} from  './Navbar'
import {IntroSection} from './IntroSection'
import {RecentPost} from './RecentPost'
import '../App.css'
import {Blogs} from './Blogs'

export const Work = () => {
  return (
     <>
      <Navbar></Navbar>
     <IntroSection/>
     <RecentPost/>
     </>
  )
}

export default Work
