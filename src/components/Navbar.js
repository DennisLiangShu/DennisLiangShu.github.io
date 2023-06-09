import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 1030) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => { showButton() }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href="/" className='nav-links' onClick={closeMobileMenu}>
                                HOME
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#about" className='nav-links' onClick={closeMobileMenu}>
                                ABOUT
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#projects" className='nav-links' onClick={closeMobileMenu}>
                                PROJECTS
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#contact" className='nav-links-mobile' onClick={closeMobileMenu}>
                                CONTACT
                            </a>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' link="#contact">CONTACT</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar