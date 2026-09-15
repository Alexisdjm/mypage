import images from '../images/exporting.js';

const Technologies = () => {
    return(
        <div id='technologies' className='section-container flex-center section-margin'>
            <div className='flex-col align-center img-gap technologies-container'>
                <h2 className='skills-title'>Technologies</h2>
                <p className='page-content justify-center-text'>
                Alexis Jiménez works with a modern stack focused on performance, maintainability, and user experience. From React and Django to Shopify and Unity, these are the core technologies behind my projects as a Full Stack Web Developer.
                </p>
                <div className='grid-img-matrix'>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.html} alt='HTML logo' loading='lazy'></img>
                        <h3 className='technologies-title-img justify-center-text'>HTML</h3>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.css} alt='CSS logo' loading='lazy'></img>
                        <h3 className='technologies-title-img justify-center-text'>CSS</h3>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.javascript} alt='JavaScript logo' loading='lazy'></img>
                        <h3 className='technologies-title-img justify-center-text'>JAVASCRIPT</h3>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.reactlogo} alt='React logo' loading='lazy'></img>
                        <h3 className='technologies-title-img justify-center-text'>REACT JS</h3>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.python} alt='Python logo' loading='lazy'></img>
                        <h3 className='technologies-title-img justify-center-text'>PYTHON</h3>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.postgre} alt='PostgreSQL logo' loading='lazy'></img>
                        <h3 className='technologies-title-img justify-center-text'>POSTGRE</h3>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.tailwindcss} alt='Tailwind CSS logo' loading='lazy'></img>
                        <h3 className='technologies-title-img justify-center-text'>TAILWIND</h3>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.bootstrap} alt='Bootstrap logo' loading='lazy'></img>
                        <h3 className='technologies-title-img justify-center-text'>BOOTSTRAP</h3>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.seo} alt='SEO icon' loading='lazy'></img>
                        <h3 className='technologies-title-img justify-center-text'>SEO</h3>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.shopify} alt='Shopify logo' loading='lazy'></img>
                        <h3 className='technologies-title-img justify-center-text'>SHOPIFY</h3>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.django} alt='Django logo' loading='lazy'></img>
                        <h3 className='technologies-title-img justify-center-text'>DJANGO</h3>
                    </div>
                    <div className='flex-col align-center img-gap'>
                        <img className='technologies-dimensions' src={images.unityLogo} alt='Unity logo' loading='lazy'></img>
                        <h3 className='technologies-title-img justify-center-text'>UNITY</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies