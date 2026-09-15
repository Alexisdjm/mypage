import images from '../images/exporting.js';
import { useState } from 'react';
import { SOCIAL_PROFILES } from '../config/seo';

const PROJECTS = [
    {
        id: 'condiments',
        name: 'La Casa de los Condimentos',
        tech: 'Django REST Framework and React.js',
        image: images.condimentos,
        imageAlt: 'La Casa de los Condimentos marketplace project by Alexis Jiménez',
        description: 'E-commerce marketplace built by Alexis Jiménez with React.js and Django REST Framework. A curated online store for premium condiments, nuts, spices, and baking essentials based in Barquisimeto, Venezuela.',
        repoUrl: SOCIAL_PROFILES.github,
    },
    {
        id: 'swiss',
        name: 'SwissGetal',
        tech: '(Shopify theme)',
        image: images.swissgetal,
        imageAlt: 'SwissGetal Shopify theme project by Alexis Jiménez',
        description: 'Shopify theme developed by Alexis Jiménez for SwissGetal, a beauty supply store in Switzerland. Built with Liquid, custom metadata, and JavaScript for the storefront UI.',
        repoUrl: SOCIAL_PROFILES.github,
    },
    {
        id: 'ecommerce',
        name: 'Ecommerce Site',
        tech: '(Django, HTML, CSS and JavaScript)',
        image: images.ecommerce,
        imageAlt: 'Ecommerce site project by Alexis Jiménez',
        description: 'Full e-commerce website by Alexis Jiménez using Python and Django with an ORM database, server-side logic, and rendered HTML templates.',
        repoUrl: SOCIAL_PROFILES.github,
    },
    {
        id: 'mail',
        name: 'Mail Web App',
        tech: '(Django, HTML, CSS and JavaScript)',
        image: images.mail,
        imageAlt: 'Mail web application project by Alexis Jiménez',
        description: 'Web application by Alexis Jiménez that lets registered users send and receive emails through API calls to a Django backend.',
        repoUrl: SOCIAL_PROFILES.github,
    },
    {
        id: 'social',
        name: 'Social Media Web App',
        tech: '(Django, REST API, JavaScript)',
        image: images.faketwitter,
        imageAlt: 'Social media web app project by Alexis Jiménez',
        description: 'Social network-style web app by Alexis Jiménez built with Django REST API and JavaScript for user interactions and content sharing.',
        repoUrl: SOCIAL_PROFILES.github,
    },
    {
        id: 'chat',
        name: 'Real Time Chat App',
        tech: '(Django Channels, REST API, WebSocket)',
        image: images.fakewhatsapp,
        imageAlt: 'Real-time chat application project by Alexis Jiménez',
        description: 'Real-time chat application by Alexis Jiménez using Django Channels and WebSockets. Users can update profiles, manage contacts, and send instant messages.',
        repoUrl: SOCIAL_PROFILES.github,
    },
];

const Projects = ({ref}) => {
    const [expandedMobile, setExpandedMobile] = useState({});

    const toggleMobile = (id) => {
        setExpandedMobile((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div ref={ref} id='projects' className='projects-container'>
            <h2 className='skills-title'>Projects by Alexis Jiménez</h2>
            <section id='projects-container' className='project-gallery' aria-label='Portfolio projects'>
                {PROJECTS.map((project) => (
                    <article
                        key={project.id}
                        className='flex-center project-box project-box--interactive'
                        style={{backgroundImage: `url(${project.image})`}}
                        aria-label={project.name}
                    >
                        <img src={project.image} alt={project.imageAlt} className='project-box-image' loading='lazy' />
                        <div className='project-name-container'>
                            <h3 className='project-name'>{project.name}</h3>
                            <p className='identifier'>{project.tech}</p>
                            <p className='project-description page-content'>{project.description}</p>
                            <div className='project-links'>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    className='mobile-project-link'
                                    href={project.repoUrl}
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
            <div className='flex-col align-center mobile-projects-container'>
                {PROJECTS.map((project) => (
                    <div key={project.id} className='mobile-projects-view'>
                        <div className='mobile-project-box' style={{backgroundImage: `url(${project.image})`}} role='img' aria-label={project.imageAlt}></div>
                        <div className='mobile-project-info'>
                            <h3 className='project-name'>{project.name}</h3>
                            <p className={!expandedMobile[project.id] ? 'page-content p-hidden' : 'page-content p-hidden grow'}>
                                {project.description}
                            </p>
                            <button onClick={() => toggleMobile(project.id)} className='mobile-project-link'>
                                {!expandedMobile[project.id] ? 'Show more' : 'Show less'}
                            </button>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                className='mobile-project-link project-link-secondary'
                                href={project.repoUrl}
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
