import React from 'react'
import navbar from './navbar.css'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="brandName"><h2>Minister of Agriculture</h2></div>
                <nav className="navbar">
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Sectors</a></li>
                        <li><a href='#'>View Report</a></li>
                        <li><a href='#'>Account</a></li>
                        <li><a href='#'>About</a></li>
                    </ul>
                </nav>
            </div>
           
        </header>
      
    )
}

export default Header
