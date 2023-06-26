import React from "react";
import {Link} from 'react-router-dom'
import './header.css';


function Header () {
    return (
 
        <header>
            <nav className="nav-bar">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div classNae="nav-list">
                    <ul>
                        <li className="nav-item"><a href="#" class="nav-link">Início</a></li>
                        <li className="nav-item"><Link  to='data'>games</Link></li>
                    </ul>
                </div>

        
            </nav>
        </header>

    )
}

export default Header;
