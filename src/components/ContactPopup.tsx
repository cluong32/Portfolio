import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPopup.css';
import { Share2 } from 'lucide-react';

function ContactPopup() {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const [ status, setStatus ] = useState<string>('');
    const formRef = useRef<HTMLFormElement>(null);

    const togglePopup = () => {
        setIsOpen(!isOpen);
        setStatus('');
    };

    const sendEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');

        if (!formRef.current) return;

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setStatus('Email successfully sent!');
            formRef.current?.reset();
            setTimeout(() => setIsOpen(false), 2000);
        })
        .catch((error) => {
            console.error('Failed to send: ', error);
            setStatus('Failed to send email.')
        });
    };

    
    return (
        <div id='popup-container'>
            <button onClick={togglePopup} id='popup-button'>
                <Share2 />Contact
            </button>
            {isOpen && (
                <div className="popup-overlay" onClick={togglePopup}>
                    <div className="popup-window" onClick={(e) => e.stopPropagation()}>
                    <div className="popup-header">
                        <h2>Contact Form</h2>
                        <button onClick={togglePopup}>&times;</button>
                    </div>

                    <form id="email-form" ref={formRef} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Full Name" required />
                        <input type="text" name="email" placeholder="Email Address" required />
                        <textarea name="message" placeholder="Your Message" required />
                        <button type="submit">Send</button>
                        {status && <p>{status}</p>}
                    </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContactPopup;