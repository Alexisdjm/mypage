import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import images from '../images/exporting.js';
import { Link } from 'react-router-dom';


const Skills = ({ref}) => {

    const text = "Hello there! I'm Alexis Jiménez (Alexis Jimenez), an Electronics and Computer Engineer turned Full Stack Web Developer based in Barquisimeto, Venezuela. With a strong foundation in both hardware and software, I bring a unique perspective to the world of web development. My expertise spans various frontend and backend technologies, allowing me to craft seamless and innovative digital experiences. Beyond the web, I also dabble in the realm of game development, adding a touch of creativity to my technical skill set. Explore my portfolio and let's embark on a journey of turning ideas into digital realities together!"

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
      <div ref={ref} id='skills' className='section-container flex-center'>
          <div className='content-card'>
              <h2 className='skills-title'>What I Am Great At?</h2>
              <div className='myself-text-container'>
                  <p className='page-content justify-center-text'>
                    {text}
                  </p>
              </div>
              <div className='cien'>
                <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={5000} ssr={true} draggable={true} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    <div className='minicard'>
                      <img src={images.web} alt='Web development icon' className='skills-img-dimensions' loading='lazy'></img>
                      <p className='skills-card-title'>Web Development</p>
                    </div>
                    <div className='minicard'>
                      <img src={images.design} alt='UX and UI design icon' className='skills-img-dimensions' loading='lazy'></img>
                      <p className='skills-card-title'>UX / UI Deisgn</p>
                    </div>
                    <div className='minicard'>
                      <img src={images.backend} alt='Backend development icon' className='skills-img-dimensions' loading='lazy'></img>
                      <p className='skills-card-title'>Backend</p>
                    </div>
                    <div className='minicard'>
                      <img src={images.shopify} alt='Shopify development icon' className='skills-img-dimensions' loading='lazy'></img>
                      <p className='skills-card-title'>Shopify</p>
                    </div>
                </Carousel>;
              </div>
              <Link to='/about' className='button skills-btn'>More About Me</Link>
          </div>
      </div>
    ) 
}

export default Skills