import images from '../images/exporting.js';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {

    const Checkpath = ({path, id, name, css}) => {
        if (window.location.pathname === path) {
            return( <HashLink className={css} to={'#' + id} smooth>{name}</HashLink> )
        } else {
            return( <HashLink className={css} to={path + '#' + id}>{name}</HashLink> )
        }
    }

    const ScrollToTop = (path) => {
        if (window.location.pathname !== path) {
            return
        }
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }

    return(
        <div className='flex-col align-center footer-margin footer-bg'>
            <img src={images.mylogo} className='footer-logo' alt='Alexis Jiménez logo' loading='lazy'></img>
            <div className='links-container-footer'>
                <div className='flex-link'>
                    <Link to='/' className='link-footer' onClick={() => {ScrollToTop('/')}}>Home</Link>
                </div>
                <div className='flex-link'>
                    <Link to='/about' className='link-footer' onClick={() => {ScrollToTop('/about')}}>About me</Link>
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
            <div className='flex-col align-center last-gap'>
                <p className='last-text'>Alexis Jiménez — Full Stack Web Developer</p>
                <p className='last-text'><a className='link-footer' href='mailto:Alexis.jm29@gmail.com'>Alexis.jm29@gmail.com</a></p>
                <p className='last-text'>© {new Date().getFullYear()} Alexis Jiménez. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer