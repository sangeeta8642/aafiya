import React from 'react'
import { nav2_links } from '.'
import "../CSS files/Navbar2.css"

const Navbar2 = () => {
  return (
    <section className='navbar2'>
      <div className='links'>
      {
        nav2_links.map((link)=>(
          <a href={link.href} key={link.title}>{link.title}</a>
        ))
      }
      </div>
    </section>
  )
}

export default Navbar2
