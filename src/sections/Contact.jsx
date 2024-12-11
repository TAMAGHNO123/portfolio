import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
        
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });


    useEffect(() => {
        emailjs.init("34q4YlVsldG2z5aqk");
    }, []);

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Make sure form field names match your EmailJS template variables
        const templateParams = {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_name: 'Tamaghno', // Add recipient name
        };

        try {
            const response = await emailjs.send(
                'service_i4jdu1c', // Service ID
                'template_kee7t2j', // Template ID 
                templateParams,
                '34q4YlVsldG2z5aqk' // Public Key
            );

            if (response.status === 200) {
                alert('Message sent successfully!');
                setForm({
                    name: '',
                    email: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Email error:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className='c-space my-20' id='contact'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src="/assets/terminal.png" alt="terminal-background" className='absolute inset-0 min-h-screen' />
                <div className='contact-container'>
                    <h3 className='head-text mt-10'>Let's talk</h3>
                    <p className='text-lg text-white-600 mt-3'>
                        Looking to collaborate on a new project or simply discuss your ideas? I'd love to hear from you. 
                        Feel free to reach out via email or connect with me on LinkedIn. Let's create something amazing together!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input
                                type="text"
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='John Doe'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input
                                type="email"
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='johndoe@gmail.com'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your message</span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='field-input'
                                placeholder='Type your message here...'
                            />
                        </label>
                        <button className='field-btn' type='submit' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;