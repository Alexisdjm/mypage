import { FaInstagram, FaGithub, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { SOCIAL_PROFILES } from '../config/seo';

function SocialMenu() {
    return(
        <div className='social-media-menu'>
        <a target="_blank" rel="noreferrer" className='social-media-link' href={SOCIAL_PROFILES.instagram} aria-label='Instagram profile of Alexis Jiménez'><FaInstagram /></a>
        <a target="_blank" rel="noreferrer" className='social-media-link' href={SOCIAL_PROFILES.github} aria-label='GitHub profile of Alexis Jiménez'><FaGithub/></a>
        <a target="_blank" rel="noreferrer" className='social-media-link' href={SOCIAL_PROFILES.linkedin} aria-label='LinkedIn profile of Alexis Jiménez'><FaLinkedin/></a>
        <a target="_blank" rel="noreferrer" className='social-media-link' href={SOCIAL_PROFILES.tiktok} aria-label='TikTok profile of Alexis Jiménez'><FaTiktok/></a>
      </div>
    )
}

export default SocialMenu
