import { useState, useEffect } from "react";
import Image from 'next/image';
import Header from "../components/header/Header";
import FormInput from "../components/formInput/FormInput";
import CustomButton from "../components/custombutton/CustomButton";
import './contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState('Send message');

    const isEmailValid = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
    };

    const isDisabled = !name || !email || !message || !isEmailValid(email) || buttonText!="Send message";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending message...');

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        try {
            await emailjs.send(
                'service_f8e7q9x',
                'template_ckaajip',
                templateParams,
                'JdVIYOlNVbEzzXVF4'
            );
      
            setButtonText('Message delivered ✓');
            setTimeout(() => setButtonText('Send message'), 2000);
        } catch (error) {
            console.error('Failed to send the message:', error);
            setButtonText('Send message');
        }
    };
    useEffect(() => {
        document.title = "Let's Talk";
    }, []);
    return (
        <>
            <Header />

            <div className="social-container">
                <p className="social-container-introduction"><span className="social-container-introduction-special">Reach out,</span> and lets keep  the conversation going.</p>
            </div>

            <div className="contact-body">
                <div className="contact-body-content">
                    <form className="contact-body-content-main" action="https://formsubmit.co/opeyemiodedeyi@gmail.com" method="post">
                        <FormInput 
                            type="text" 
                            placeholder="What should I call you?" 
                            input="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                        
                        <FormInput 
                            type="email" 
                            placeholder="Your email, please" 
                            input="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>

                        <FormInput
                            type="textarea"
                            placeholder="Your message here"
                            input="Your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}/>

                        <CustomButton  onClick={handleSubmit} disabled={isDisabled}>{buttonText}</CustomButton>
                    </form>
                    <div className="contact-body-content-socials">
                        <p className="contact-body-subtitle">Follow me</p>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/odedeyiope/" target="_blank" rel="noopener noreferrer">
                                <Image src="/instagram.svg" alt="Instagram" className="social-icon" width="24" height="24" />
                            </a>
                            <a href="https://www.linkedin.com/in/opeyemi-odedeyi/" target="_blank" rel="noopener noreferrer">
                                <Image src="/linkedin.svg" alt="LinkedIn" className="social-icon" width="24" height="24" />
                            </a>
                            <a href="https://github.com/opeodedeyi" target="_blank" rel="noopener noreferrer">
                                <Image src="/github.svg" alt="Github" className="social-icon" width="24" height="24" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact