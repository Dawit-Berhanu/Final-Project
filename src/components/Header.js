import React from 'react'
import navbar from './navbar.css'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="brandName"><h2>Minister of Agriculture</h2></div>
                <nav className="navbar">
                    <ul>
                        <li><Link to='App'>Home</Link></li>
                         <div className="dropdown">
                             <button className="dropbtn"><li><Link to='Sectors' >Sectors</Link></li></button>
                             <div className="dropdown-content">

                                 <Link to=''>Natural resource</Link>
                                 <Link to=''> Farming development</Link>
                                 <Link to=''>agricultural input</Link>
                                 <Link to=''>LiveStock resource</Link>
                             </div>
                         </div>
                        <li><Link to='#'>View Report</Link></li>
                        <li><Link to='#'>Account</Link></li>
                        <li><Link to='#'>About</Link></li>
                    </ul>
                </nav>
            </div>
           
        </header>
      
    )
}

export default Header
