import Carousel from "react-multi-carousel";
import images from "../images/exporting";

const Boxes = () => {

    const content = {
        myself: `My name is Alexis Jiménez (Alexis Jimenez), also known as Alexis David Jiménez Mendoza — a 26-year-old professional hailing from Barquisimeto, Venezuela. I hold a degree in Electronic Engineering and am a certified Full Stack Web Developer, having successfully completed my studies in Electronic Engineering and obtained certification from Harvard via edx in 2022. Currently, I serve as a Frontend Web Developer at Meraki Vision agency, where my responsibilities encompass the development of Shopify themes, user interface design, and the implementation of new features, including the installation and configuration of various apps.
            My ardor for technology, particularly in the realm of software development, propels me to dedicate my free time to honing my coding skills. This continual pursuit aims to enhance my problem-solving capabilities and stay abreast of emerging technologies, encompassing frameworks, development tools, libraries, new programming languages, and all facets of the ever-evolving technological landscape.`,
        developer: 'As a seasoned Full Stack Web Developer, my passion lies not only in crafting compelling frontend experiences and innovative UX/UI designs but also in delving deep into the intricacies of backend development, including expertise in SQL, NoSQL databases, and beyond. My commitment to excellence is unwavering, reflected in my meticulous approach to work. I consistently adhere to industry best practices, ensuring the implementation of code that not only meets but exceeds standards, thereby guaranteeing the seamless functionality of every project.',
        backend: 'As a versatile Full Stack Developer, my professional journey has entailed mastering a spectrum of concepts and deploying diverse technologies for backend development and optimal website functionality. At present, my proficiency extends to Django, a robust backend framework utilizing Python as its core language. However, my fervor for continuous growth compels me to delve into and master cutting-edge technologies, encompassing Node.js, Express.js, Fast API, Flask, SQL databases, and an array of other innovative tools. This dedication to ongoing learning underscores my commitment to remaining agile in the dynamic realm of technology.',
        frontend: 'In my projects, I prioritize the visual aspects and frontend components. As a developer, I proficiently utilize HTML and CSS, with a keen command of JavaScript and CSS frameworks such as Bootstrap and TailwindCSS. While currently employing React.js for interface development, I am eager to broaden my skill set by delving into other technologies like Vue.js, Svelte, and Solid.js. Additionally, I am intrigued by the prospect of exploring frontend frameworks like Angular to further diversify my capabilities.',
        design1: "I am actively involved in the meticulous design process of websites, where I curate the interface and carefully select assets prior to commencing the development phase. My preferred design tool, Figma, serves as the cornerstone for crafting the website's interface, catering to both desktop and mobile devices. Concluding the design phase involves thoughtful choices in font selection and the establishment of a harmonious color palette.",
        design2: 'Furthermore, I leverage a suite of tools to source additional assets such as icons and images. Noteworthy among these are Flaticon, Font Awesome, and Material Design Icons, providing an extensive array of icons in various formats. To complement this, platforms like Pexels and Freepik become indispensable for acquiring high-quality images. For intricate image editing, Adobe Illustrator stands out as my tool of choice.',
        iwant: `I am dedicated to advancing my capabilities as a developer, engineer, and professional through ongoing education. Currently, my focus is on expanding my knowledge in game development, particularly exploring technologies like React Native and Flutter for mobile applications.
        Beyond this, I am eager to delve into desktop application development, and I have aspirations to pursue a postgraduate degree in artificial intelligence. These endeavors underscore my commitment to staying abreast of the latest technologies and fostering a well-rounded skill set in software development.`,
        hobbies: 'In my leisure hours, I indulge in playing video games, with a particular fondness for titles from the Call of Duty series, Overwatch, Titanfall, Battlefield, FromSoftware creations, PlayStation exclusives, and engaging single-player experiences. On a different note, my enthusiasm extends to science fiction films, particularly those intricately woven with technological themes such as Ironman, Pacific Rim, Alien, and the iconic Star Wars franchise.'
    }

    const ParagraphWithLineBreaks = ({ text }) => {
        return (
          <>
            {text.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </>
        );
      };

    const Images = ({css, img1, img2, img3, img4, img5, img6}) => {
        return(
            <div className={css}>
                { img1 ? <img className="icons-about-dimensions" src={img1} alt='Skill icon' loading='lazy'></img> : '' }
                { img2 ? <img className="icons-about-dimensions" src={img2} alt='Skill icon' loading='lazy'></img> : '' }
                { img3 ? <img className="icons-about-dimensions" src={img3} alt='Skill icon' loading='lazy'></img> : '' }
                { img4 ? <img className="icons-about-dimensions" src={img4} alt='Skill icon' loading='lazy'></img> : '' }
                { img5 ? <img className="icons-about-dimensions" src={img5} alt='Skill icon' loading='lazy'></img> : '' }
                { img6 ? <img className="icons-about-dimensions" src={img6} alt='Skill icon' loading='lazy'></img> : '' }
            </div>
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

    return(
        <div className="flex-col align-center about-boxes-container">
            <div className="my-resume-container flex-center card-space-gap">
                <div className="card-align-bg myself-card-dimensions flex-col align-center inner-card-gap margin-side-40">
                    <h2 className="about-boxes-title justify-center-text">Who Am I ?</h2>
                    <div className="page-content justify-center-text myself-content">
                        <ParagraphWithLineBreaks text={content.myself}/>
                    </div>
                    <Images css='flex-center align-center first-gap grid-box-2-images' img1={images.engineer} img2={images.ui} img3={images.web} img4={images.graduation}/>
                </div>
            </div>
            <div className="cien what-i-do">
                <h2 className="about-boxes-title justify-center-text">What I Do in Code</h2>
                <Carousel responsive={responsive} ssr={true} draggable={true} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    <div className="about-dev-mobile-card space-around">
                        <div className="flex-col align-center">
                            <h3 className="about-boxes-title justify-center-text">As A Developer</h3>
                            <p className="page-content justify-center-text myself-content optional-margin">{content.developer}</p>
                        </div>
                        <Images css='flex-center align-center inner-card-gap grid-2' img1={images.web} img2={images.javascript} img3={images.css} img4={images.python}/>
                    </div>
                    <div className="about-dev-mobile-card space-around">
                        <div className="flex-col align-center">
                            <h3 className="about-boxes-title justify-center-text">In Frontend</h3>
                            <p className="page-content justify-center-text myself-content optional-margin">{content.frontend}</p>
                        </div>
                        <Images css='flex-center align-center inner-card-gap grid-2' img1={images.html} img2={images.css} img3={images.javascript} img4={images.reactlogo}/>
                    </div>
                    <div className="about-dev-mobile-card space-around">
                        <div className="flex-col align-center">
                            <h3 className="about-boxes-title justify-center-text">In Backend</h3>
                            <p className="page-content justify-center-text myself-content optional-margin">{content.backend}</p>
                        </div>
                        <Images css='flex-center align-center inner-card-gap grid-2' img1={images.django} img2={images.python} img3={images.postgre} img4={images.backend}/>
                    </div>
                </Carousel>
            </div>
            <div className="flex-center card-space-gap container-dimensions-dev">
                <div id="developer" className="flex-col card-space-gap dev-dimensions">
                    <div className="card-align-bg flex-col align-center">
                        <h3 className="about-boxes-title justify-center-text">As A Developer</h3>
                        <p className="page-content justify-center-text myself-content optional-margin">{content.developer}</p>
                        <Images css='flex-center align-center icons-gap-50 developer-img-2' img1={images.web} img2={images.javascript} img3={images.css} img4={images.python}/>
                    </div>
                    <div className="card-align-bg flex-col align-center">
                        <h3 className="about-boxes-title justify-center-text">In Backend</h3>
                        <p className="page-content justify-center-text myself-content optional-margin">{content.backend}</p>
                        <Images css='simple-flex space-between icons-container-w' img1={images.django} img2={images.python} img3={images.postgre}/>
                    </div>
                </div>
                <div className="card-align-bg design-dimensions flex-col align-center space-between">
                    <h2 className="about-boxes-title justify-center-text">In Design</h2>
                    <p className="page-content justify-center-text myself-content">{content.design1}</p>
                    <img className="icons-about-dimensions" src={images.figma} alt='Figma design tool logo' loading='lazy'></img>
                    <p className="page-content justify-center-text myself-content">{content.design2}</p>
                    <div>
                        <img className="icons-about-dimensions" src={images.fontawesome} alt='Font Awesome icon library' loading='lazy'></img>
                        <img className="icons-about-dimensions" src={images.illustrator} alt='Adobe Illustrator logo' loading='lazy'></img>
                    </div>
                </div>
            </div>
            <div className="flex-center card-space-gap container-about-settings">
                <div className="card-align-bg future-card flex-col align-center">
                    <h2 className="about-boxes-title justify-center-text">What I Want To Do ?</h2>
                    <div className="page-content justify-center-text myself-content">
                        <ParagraphWithLineBreaks text={content.iwant}/>
                    </div>
                    <Images css='grid-2' img1={images.reactlogo} img2={images.flutter} img3={images.unityLogo} img4={images.ai}/>
                </div>
                <div id="frontend" className="card-align-bg frontend-card flex-col align-center card-space-gap">
                    <h3 className="about-boxes-title justify-center-text">In Frontend</h3>
                    <p className="page-content justify-center-text myself-content">{content.frontend}</p>
                    <Images css='flex-wrap-images' img1={images.html} img2={images.css} img3={images.javascript} img4={images.reactlogo} img5={images.tailwindcss} img6={images.bootstrap}/>
                </div>
            </div>
            <div className="my-resume-container flex-center card-space-gap">
                <div className="card-align-bg myself-card-dimensions flex-col align-center mobile-transparent margin-side-40">
                    <h2 className="about-boxes-title justify-center-text">My Hobbies</h2>
                    <p className="margin-p-hobbies page-content justify-center-text myself-content">{content.hobbies}</p>
                    <div className="flex-center align-center inner-card-gap mobile-column">
                        <img className="icons-about-dimensions overwatch-mobile-top" src={images.overwatch} alt='Overwatch game logo' loading='lazy'></img>
                        <img className="fromsoftware-logo" src={images.fromsoftware} alt='FromSoftware logo' loading='lazy'></img>
                        <img className="icons-about-dimensions overwatch" src={images.overwatch} alt='Overwatch game logo' loading='lazy'></img>
                        <img className="cod-logo" src={images.cod} alt='Call of Duty logo' loading='lazy'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boxes
