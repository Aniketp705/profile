import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import Magnetic from './Magnetic';

const Contact = () => {
    return (
        <section className="section" id="contact">
            <div className="container contact-container">
                <h2 className="section-title">Get In Touch</h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p>
                        I am currently looking for internship opportunities/full-time roles.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="contact-btn">
                        <Magnetic>
                            <a href="mailto:aniketpawar705@gmail.com" className="btn">Say Hello</a>
                        </Magnetic>
                    </div>

                    <div className="social-links big-socials">
                        <Magnetic>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://github.com/Aniketp705" target="_blank" rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="tel:+919405107842" className="phone-icon">
                                <FaPhone />
                            </a>
                        </Magnetic>
                    </div>
                </motion.div>
            </div >
        </section >
    );
};

export default Contact;
