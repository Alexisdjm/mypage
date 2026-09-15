import { Link } from 'react-router-dom';
import images from '../images/exporting.js';
import { useState, useEffect, useRef } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import useScrollToSection from '../customHooks.js/useScrollToSection.js';

function Header() {   
    
    const sidebar = useRef()
    const [header, setHeader] = useState(false)
    const [toggle, setToggle] = useState(false)

    const scrollToSection = useScrollToSection();
    
    useEffect(() => {
        window.scrollTo(0, 0)
        document.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setHeader(true)
            } else {
                setHeader(false)  
            }
        })
      }, []);

    const showhide = (element) => {
        element.classList.contains('show-sidebar') ? element.classList.remove('show-sidebar') : element.classList.add('show-sidebar')
        return('')
    }

    const fewFunctions = (id) => {
        showhide(sidebar.current); 
        setToggle(false)
        scrollToSection(id)
    }

    const ScrollToTop = (path) => {
        if (window.location.pathname !== path) {
            return
        }
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }

    return (
        <>
            <div className={!header ? 'navbar-container flex-center': 'navbar-container flex-center navbar-scroll'}>
                <div className="flex-navbar align-center">
                    <Link to='/' onClick={() => {ScrollToTop('/')}}>
                        <img src={images.mylogowhite} className={!header ? 'mylogo' : 'mylogo img-smaller'} alt='Alexis Jiménez logo'></img>
                    </Link>
                    <input onChange={() => {showhide(sidebar.current); setToggle(!toggle)}} id="toggleChecker" checked={toggle} type="checkbox"></input>
                    <label id="togglerLable" className="sidebar-btn" htmlFor="toggleChecker">
                    <div className="checkboxtoggler">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                    </div>
                    </label>
                    <div ref={sidebar} className='sidebar align-center flex-sidebar'>
                        <div className='header-content--box'>
                            <img src={images.mylogo} className='footer-logo logo-sidebar-margin' alt='Alexis Jiménez logo'></img>
                            <div className='links-container-footer'>
                                <div className='flex-link'>
                                    <Link to='/' className='link-footer' onClick={() => {ScrollToTop('/'); showhide(sidebar.current); setToggle(false)}}>Home</Link>
                                </div>
                                <div className='flex-link'>
                                    <Link to='/about' className='link-footer' onClick={() => {ScrollToTop('/about'); showhide(sidebar.current); setToggle(false)}}>About me</Link>
                                </div>
                                <div className='flex-link'>
                                    <button onClick={() => fewFunctions('projects')} className='link-footer linkbtn'>Projects</button>
                                </div>
                                <div className='flex-link'>
                                    <button onClick={() => fewFunctions('skills')} className='link-footer linkbtn'>Skills</button>
                                </div>
                                <div className='flex-link'>
                                    <button onClick={() => fewFunctions('technologies')} className='link-footer linkbtn'>Technologies</button>
                                </div>
                                <div className='flex-link'>
                                    <button onClick={() => fewFunctions('contact')} className='link-footer linkbtn'>Contact</button>
                                </div>
                            </div>
                            <div className='flex-social-horizontal'>
                                <a target="_blank" rel="noreferrer" className='link-sidebar-icon' href="https://wa.me/584245604821?text=Hi%20Alexis%20how%20are%20you?"><FaWhatsapp/></a>
                                <a target="_blank" rel="noreferrer" className='link-sidebar-icon' href='https://instagram.com/alexisdjm__' aria-label='Instagram profile of Alexis Jiménez'><FaInstagram /></a>
                                <a target="_blank" rel="noreferrer" className='link-sidebar-icon' href='https://github.com/Alexisdjm' aria-label='GitHub profile of Alexis Jiménez'><FaGithub/></a>
                                <a target="_blank" rel="noreferrer" className='link-sidebar-icon' href='https://www.linkedin.com/in/alexis-jimenez-42083823a' aria-label='LinkedIn profile of Alexis Jiménez'><FaLinkedin/></a>
                                <a target="_blank" rel="noreferrer" className='link-sidebar-icon' href='https://www.tiktok.com/@alexisdjm__' aria-label='TikTok profile of Alexis Jiménez'><FaTiktok/></a>
                            </div>
                        </div>
                        <span onClick={() => {showhide(sidebar.current); setToggle(false)}}></span>
                    </div>
                    <div className="links-container">
                        <div className='flex-link'>
                            <Link to='/' className='link' onClick={() => {ScrollToTop('/')}}>Home</Link>
                        </div>
                        <div className='flex-link'>
                            <Link to='/about' className='link' onClick={() => {ScrollToTop('/about')}}>About me</Link>
                        </div>
                        <div className='flex-link'>
                            <button onClick={() => scrollToSection('skills')} className='link linkbtn'>Skills</button>
                        </div>
                        <div className='flex-link'>
                            <button onClick={() => scrollToSection('projects')} className='link linkbtn'>Projects</button>
                        </div>
                        <div className='flex-link'>
                            <button onClick={() => scrollToSection('technologies')} className='link linkbtn'>Technologies</button>
                        </div>
                        <div className='flex-link'>
                            <button onClick={() => scrollToSection('contact')} className='button'>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header