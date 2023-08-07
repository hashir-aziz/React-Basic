import React from 'react'
import {Navbar} from  './Navbar'
import {BlogInfo} from  './BlogInfo'
export const Blogs = () => {
  return (
    <>
<Navbar></Navbar>
<p className='Blogs'>
    Blog
</p>
<BlogInfo/>

<BlogInfo/>
<BlogInfo/>
<BlogInfo/>


    </>
  )
}

export default Blogs