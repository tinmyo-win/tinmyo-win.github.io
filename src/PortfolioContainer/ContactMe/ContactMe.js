import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import imgContact from '../../assets/ContactMe/images/mailz.jpeg';
import loadingGif from '../../assets/ContactMe/images/load.gif';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';

import './ContactMe.css'

const ContactMe = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [banner, setBanner] = useState('')
    const [bool, setBool] = useState(false)

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const handleMessage = (event) => {
        setMessage(event.target.value);
    }

    const submitForm = async (event) => {
        event.preventDefault();

        try {
            let data = {
                name,
                email,
                message
            };
            setBool(true);
            const res = await axios.post(`https://portfolio-mail-service.netlify.app/.netlify/functions/server/contact`, data);
            if(name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg)
                toast.error(res.data.msg)
                setBool(false)
            } else if(res.status === 200) {
                setBanner(res.data.msg)
                toast.success(res.data.msg);
                setBool(false)
            }

            setName('');
            setEmail('');
            setMessage('');
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className='main-container' id='contact'>
            <ScreenHeading subHeading='Keep In Touch' title='Contact Me' />
            <div className='central-form'>
                <div className='col'>
                    <h2 className='title'>
                        Get In Touch
                    </h2>
                    <div className="colz-icon">
                        <a href="https://www.facebook.com/tin.m.win.104">
                            <i className="fa fa-facebook-square "></i>
                        </a>
                        <a href="https://www.github.com/tinmyo-win">
                            <i className="fa fa-github-square "></i>
                        </a>
                        <a href="https://www.linkedin.com/in/tin-myo-win-a28a21197">
                            <i className="fa fa-linkedin-square "></i>
                        </a>
                    </div>
                </div>
                <div className='back-form'>
                    <div className='img-back'>
                        <h4>Send your email here!</h4>
                        <img src={imgContact} alt='Contact background' />
                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor='name'>Name</label>
                        <input type='text' onChange={handleName} value={name} />

                        <label htmlFor='email'>Email</label>
                        <input type='email' onChange={handleEmail} value={email} />
                        
                        <label htmlFor='message'>Message</label>
                        <textarea type='text' onChange={handleMessage} value={message} />

                        <div className='send-btn'>
                            <button type='submit'>
                                Send<i className='fa fa-paper-plane' />
                                {bool ? (<b className='load'>
                                    <img src={loadingGif} alt='loading ...' />
                                </b>) : ("")}
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;