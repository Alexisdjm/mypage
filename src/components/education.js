import images from '../images/exporting.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Education = () => {


    const contents = {
        engineering: 'Electronics engineering is a sub-discipline of electrical engineering which emerged in the early 20th century and is distinguished by the additional use of active components such as semiconductor devices to amplify and control electric current flow.',
        web: 'This course picks up where CS50 leaves off, diving more deeply into the design and implementation of web apps with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap.',
        games: 'Learn how to create video games using Unity, the world-leading free-to-use game development tool. We start super simple so you need no prior experience of Unity or coding! With our online tutorials, you will be amazed what you can achieve right from the first moment you start the course.'
    }
    
    const Hover = ({content, title}) => {
        return(
            <>
                <h3 className='degree-name'>{title}</h3>
                <p className='degree-desc'>{content}</p>
            </>
        )
    }
    
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1351 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1350, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1023, min: 768 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1
        }
    };

    return (
        <div className='education-container flex-col align-center'>
            <h2 className='skills-title'>Education</h2>
            <div id='education-boxes' className='flex-col space-between --gap'>
                <div className='study-desktop-container'>
                    <div className='img-container-education'>
                        <img className='education-img' src={images.uny} alt='Electronic Engineering degree' loading='lazy'></img>
                    </div>
                    <div className='study-box'>
                        <div className='flex-col space-between'>
                            <Hover  content={contents.engineering} title='Electronic Engineering'/>
                        </div>
                    </div>
                </div>
                <div className='study-desktop-container'>
                    <div className='img-container-education'>
                        <img className='education-img' src={images.cs50w} alt='Harvard CS50 Web Programming certificate' loading='lazy'></img>
                    </div>
                    <div className='study-box'>
                        <div className='flex-col space-between'>
                            <Hover  content={contents.web} title='Web Programming with Python and JavaScript'/>
                        </div>
                    </div>
                </div>
                <div className='study-desktop-container'>
                    <div className='img-container-education'>
                        <img className='education-img' src={images.unity} alt='Unity game development course' loading='lazy'></img>
                    </div>
                    <div className='study-box'>
                        <div className='flex-col space-between'>
                            <Hover  content={contents.games} title='2D VIDEOGAMES DEVELOPMENT WITH C# AND UNITY'/>
                        </div>
                    </div>
                </div>
            </div>
            <div id='education-mobile-slider' className='cien'>
                <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={5000} ssr={true} draggable={true} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    <div className='study-box--mobile-container'>
                        <img className='education-img' src={images.uny} alt='Electronic Engineering degree' loading='lazy'></img>
                        <div className='study-box'>
                            <Hover content={contents.engineering} title='Electronic Engineering'/>
                        </div>
                    </div>
                    <div className='study-box--mobile-container'>
                        <img className='education-img' src={images.cs50w} alt='Harvard CS50 Web Programming certificate' loading='lazy'></img>
                        <div className='study-box'>
                            <Hover content={contents.web} title='Web Programming with Python and JavaScript'/>
                        </div>
                    </div>
                    <div className='study-box--mobile-container'>
                        <img className='education-img' src={images.unity} alt='Unity game development course' loading='lazy'></img>
                        <div className='study-box'>
                            <Hover content={contents.games} title='2D Videogames Development with C# and Unity'/>
                        </div>
                    </div>
                </Carousel>
               
            </div>
        </div>
    )
}

export default Education