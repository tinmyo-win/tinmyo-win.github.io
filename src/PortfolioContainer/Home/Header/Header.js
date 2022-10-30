import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import logoPhoto from '../../../assets/Home/hexagon-logo.png'
import './Header.css'
const Header = () => {
    const navRef = useRef();

    let prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById('header').style.top= '0';
        } else {
            document.getElementById('header').style.top= '-80px';
        }
        prevScrollpos = currentScrollPos;
    }

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }
    return(
        <header id='header'>
            <a href='/'>
                <img src={logoPhoto} className='logo' alt="Logo" />
            </a>
            <nav ref={navRef}>
                <a href="/#" onClick={showNavbar}>Home</a>
                <a href="/#about" onClick={showNavbar}>About</a>
                <a href="/#projects" onClick={showNavbar}>Projects</a>
                <a href="/#contact" onClick={showNavbar}>Contact Me</a>
                <button
                    className='nav-btn nav-close-btn'
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Header