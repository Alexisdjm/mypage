import First from './introduction.js';
import SocialMenu from './socialmedia.js';
import Skills from "./skills.js";
import Projects from "./projects.js";
import Education from "./education.js";
import Technologies from './technologies.js'
import Contact from './contactForm';
import Header from './header.js'
import Footer from './footer.js'
import Scrollbar from './scrollbar.js'
import ScrollToTop from './ScrollToTopCTA.js'
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <Scrollbar/>
            <Header/>
            <First 
                loop={true} 
                bool={true} 
                glitchtext='Alexis Jiménez' 
                first='Full Stack Web Developer' 
                second='Web Designer' 
                third='Electronic Engineer'/>
            <SocialMenu/>
            <Skills/>
            <Projects/>
            <Education/>
            <Technologies/>
            <Contact/>
            <Footer/>
            <ScrollToTop/>
        </>
    )
}

export default Home