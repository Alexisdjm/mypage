import Header from "./header.js"
import Footer from "./footer.js"
import First from "./introduction.js"
import SEO from "./SEO.js"
import { SEO_PAGES } from "../config/seo"
import Boxes from "./aboutBoxes.js"
import SocialMenu from "./socialmedia.js"
import Scrollbar from './scrollbar.js'
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <>
            <SEO {...SEO_PAGES.about} />
            <Scrollbar/>
            <Header/>
            <First glitchtext='About Alexis Jiménez' isHero={true} bool={false} align='center'/>
            <SocialMenu/>
            <Boxes/>
            <Footer/>
        </>
    )
}

export default About
