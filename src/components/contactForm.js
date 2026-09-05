import images from '../images/exporting.js';
import { useState } from 'react';
import Modal from './modal.js';
import { Parallax } from 'react-parallax';

const Contact = () => {

    // let urlAPI = "https://api.alexiswebworks.com";
    let urlAPI = process.env.REACT_APP_API_URL;
    console.log(urlAPI)

    const [formvalue, setFormvalue] = useState({email:'', name:'', body: ''})
    const [show, setShow] = useState(false)

    const handleimput = (e) => {
        const {name, value} = e.target;
        setFormvalue({...formvalue, [name]:value})
    }

    const getCookie = (name) => {
        let cookie = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return cookie ? cookie[2] : null;
    }

    const SubmitBtn = ({tag}) => {
        return(
            <button type='submit' className='submit-btn--contact-form'>
                <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                    >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                    </svg>
                    </div>
                </div>
                <span>{tag}</span>
            </button>
        )
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        let message = `You have received an email from a possible client
    - Name: ${formvalue.name}
    - Email: ${formvalue.email}

    - Message: ${formvalue.body}`;

    fetch(`${urlAPI}/contact`, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body: JSON.stringify({
            message
        })
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
    });

    formvalue.name = '';
    formvalue.email = '';
    formvalue.body = '';

    setShow(true)

    setTimeout(() => {
        setShow(false)
    }, 1500)
    }


    return(
        <div id='contact' className='contact-form-container'>
            <Parallax className='section-container flex-col align-center section-margin section-padding' blur={3} bgImage={images.background} bgImageAlt="the cat" strength={400}>
            <h4 className='skills-title'>Contact me</h4>
            <form className='contact-form flex-col section-padding' onSubmit={handlesubmit}>
                <input name='name' onChange={handleimput} value={formvalue.name} id='name' type='text' placeholder='Your name' className='contact-input' required></input>
                <input name='email' onChange={handleimput}  value={formvalue.email}  id='email' type='email' placeholder='Your email' className='contact-input' required></input>
                <div className='flex-col'>
                    <label className='message-label'>Your message</label>
                    <textarea id='body' name='body' onChange={handleimput}  value={formvalue.body} className='message' required></textarea>
                </div>
                <SubmitBtn tag={"submit"}/>
            </form>
            <Modal open={show} content={'Mail successfully sent'}/>
            </Parallax>
        </div>
    )
}

export default Contact
