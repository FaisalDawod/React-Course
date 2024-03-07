import React from 'react'
import img from '../assets/react-icon-small.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={img} alt="React Image" className='nav--icon'/>
            <h3 className='nav--logo_text'> ReactFacts </h3>
            <h4 className='nav--title'> React Course - Project 1 </h4>      
        </nav>
    )
}

export default Navbar