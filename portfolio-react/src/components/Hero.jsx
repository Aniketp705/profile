import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import profileImg from '../assets/profile.jpg';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import TiltCard from './TiltCard';
import Magnetic from './Magnetic';

const Hero = () => {
    // Generate bubbles array for rendering
    const bubbles = Array.from({ length: 10 }, (_, i) => i);

    // Mouse Parallax Logic
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Calculate parallax offset (subtle movement opposite to mouse)
    const moveX = (mousePosition.x - window.innerWidth / 2) * -0.02;
    const moveY = (mousePosition.y - window.innerHeight / 2) * -0.02;

    return (
        <section className="hero" id="home">
            <motion.div
                className="areas"
                animate={{ x: moveX, y: moveY }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
                <ul className="circles">
                    {bubbles.map((i) => (
                        <li key={i}></li>
                    ))}
                </ul>
            </motion.div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <TiltCard className="profile-img-container" style={{ display: 'inline-block' }}>
                    <img src={profileImg} alt="Aniket Pawar" className="profile-img" />
                </TiltCard>
                <h1>Hi, I'm <span className="highlight">Aniket Pawar</span></h1>
                <div className="typing-text">
                    <Typewriter
                        words={['AI & Deep Learning Enthusiast', 'Python Developer', 'Problem Solver']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </div>

                <div className="social-links">
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
                        <a href="tel:+919405107842">
                            <FaPhone />
                        </a>
                    </Magnetic>
                </div>

                <div className="hero-btns">
                    <Magnetic>
                        <a href="Resume.pdf" className="btn" download>Download Resume</a>
                    </Magnetic>
                    <Magnetic>
                        <a href="#projects" className="btn" style={{ marginLeft: '1rem', borderColor: '#fff', color: '#fff' }}>View My Work</a>
                    </Magnetic>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
