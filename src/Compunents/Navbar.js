import React from 'react'
import {NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
     <>
     <nav>
        <ul>
            <li>
<b> <NavLink to='/'>Work</NavLink></b> 
            </li>
            <li>
<b> <NavLink to='/Blogs'>Blog</NavLink></b>
            </li>
            <li> 
<b>
    <NavLink to='/Contact'>Contact</NavLink>
</b>
            </li>
        </ul>
     </nav>
     </>
  )
}

export default Navbar
