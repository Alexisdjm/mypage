import images from '../images/exporting.js';
import { useState, useEffect, useRef } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Header() {   
    
    const [header, setHeader] = useState(false)
    const sidebar = useRef()
    
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

    const Checkpath = ({path, id, name, css}) => {
        if (window.location.pathname === path) {
            return( <HashLink className={css} onClick={() => {showhide(sidebar.current)}} to={'#' + id} smooth>{name}</HashLink> )
        } else {
            return( <HashLink className={css} onClick={() => {showhide(sidebar.current)}} to={path + '#' + id}>{name}</HashLink> )
        }
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
                        <img src={images.mylogowhite} className={!header ? 'mylogo' : 'mylogo img-smaller'} alt='mylogo'></img>
                    </Link>
                    <input onChange={() => {showhide(sidebar.current)}} id="toggleChecker" type="checkbox"></input>
                    <label id="togglerLable" class="sidebar-btn" for="toggleChecker">
                    <div className="checkboxtoggler">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                    </div>
                    </label>
                    <div ref={sidebar} className='sidebar align-center'>
                        <img src={images.mylogo} className='footer-logo logo-sidebar-margin' alt='logo'></img>
                        <div className='links-container-footer'>
                            <div className='flex-link'>
                                <Link to='/' className='link-footer' onClick={() => {ScrollToTop('/'); showhide(sidebar.current)}}>Home</Link>
                            </div>
                            <div className='flex-link'>
                                <Link to='/about' className='link-footer' onClick={() => {ScrollToTop('/about'); showhide(sidebar.current)}}>About me</Link>
                            </div>
                            <div className='flex-link'>
                                <Checkpath path='/' id='projects' name='Projects' css='link-footer'/>
                            </div>
                            <div className='flex-link'>
                                <Checkpath path='/' id='skills' name='Skills' css='link-footer'/>
                            </div>
                            <div className='flex-link'>
                                <Checkpath path='/' id='technologies' name='Technologies' css='link-footer'/>
                            </div>
                            <div className='flex-link'>
                                <Checkpath path='/' id='contact' name='Contact me' css='link-footer'/>
                            </div>
                        </div>
                        <div className='flex-social-horizontal'>
                            <a target="_blank" rel="noreferrer" className='link-sidebar-icon' href="https://wa.me/584127615686?text=Hi%20Alexis%20how%20are%20you?"><FaWhatsapp/></a>
                            <a target="_blank" rel="noreferrer" className='link-sidebar-icon' href='https://instagram.com/alexisdjm__'><FaInstagram /></a>
                            <a target="_blank" rel="noreferrer" className='link-sidebar-icon' href='https://github.com/Alexisdjm'><FaGithub/></a>
                            <a target="_blank" rel="noreferrer" className='link-sidebar-icon' href='https://www.linkedin.com/in/alexis-jimenez-42083823a'><FaLinkedin/></a>
                        </div>
    
                    </div>
                    <div className="links-container">
                        <div className='flex-link'>
                            <Link to='/' className='link' onClick={() => {ScrollToTop('/')}}>Home</Link>
                        </div>
                        <div className='flex-link'>
                            <Link to='/about' className='link' onClick={() => {ScrollToTop('/about')}}>About me</Link>
                        </div>
                        <div className='flex-link'>
                            <Checkpath path='/' id='skills' name='Skills' css='link'/>
                        </div>
                        <div className='flex-link'>
                            <Checkpath path='/' id='projects' name='Projects' css='link'/>
                        </div>
                        <div className='flex-link'>
                            <Checkpath path='/' id='technologies' name='Technologies' css='link'/>
                        </div>
                        <div className='flex-link'>
                            <Checkpath path='/' id='contact' name='Contact' css='contact-link'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header