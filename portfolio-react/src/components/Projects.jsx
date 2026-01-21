import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import aiCareerCoachImg from '../assets/images/ai_career_coach.png';
import potholeImg from '../assets/images/pothole_detection.png';
import fraudImg from '../assets/images/fraud_detection.png';
import phishingImg from '../assets/images/phishing_detection.png';
import TiltCard from './TiltCard';

const Projects = () => {
    const projects = [
        {
            title: "AI Career Coach",
            tech: "Python, Gemini API, Streamlit, YT-Transcripts",
            desc: [
                "Developed an AI-powered career coach that reviews resumes and provides interview feedback.",
                "Integrated Gemini API for natural language understanding and personalized advice.",
                "Built an interactive dashboard using Streamlit for easier user interaction."
            ],
            image: aiCareerCoachImg,
            link: "#"
        },
        {
            title: "Pothole Detection System",
            tech: "Python, TensorFlow, OpenCV",
            desc: [
                "Built a real-time pothole detection system using YOLO and Computer Vision.",
                "Trained on a custom dataset to achieve high accuracy in varying lighting conditions.",
                "Optimized for performance to run efficiently on edge devices."
            ],
            image: potholeImg,
            link: "#"
        },
        {
            title: "Fraud Detection System",
            tech: "Python, Scikit-learn, Random Forest",
            desc: [
                "Developed a high-precision Random Forest classifier on a financial dataset of 6.3 million transactions.",
                "Engineered behavioral features such as \"Balance Error\" to identify account-draining patterns, achieving 99.7% Recall.",
                "Benchmarked performance against the legacy rule-based system, demonstrating a 500x improvement in fraud coverage."
            ],
            image: fraudImg,
            link: "https://github.com/Aniketp705/fraud-detection.git"
        },
        {
            title: "Phishing Website Detection",
            tech: "Python, Scikit-Learn, Random Forest, Flask",
            desc: [
                "Implemented a machine learning model to detect phishing websites with high precision.",
                "Utilized Random Forest algorithm for robust classification.",
                "Deployed as a web application using Flask for real-time URL scanning."
            ],
            image: phishingImg,
            link: "#"
        }
    ];

    const handleMouseMove = (e) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        currentTarget.style.setProperty('--mouse-x', `${x}px`);
        currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section className="section" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <TiltCard>
                                <div
                                    className="project-card"
                                    onMouseMove={handleMouseMove}
                                >
                                    <div className="project-img-wrapper">
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                    <div className="project-content">
                                        <h3>{project.title}</h3>
                                        <p className="tech-stack">{project.tech}</p>
                                        <ul>
                                            {project.desc.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                        <a href={project.link} className="project-link">
                                            <FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                                            View Project <span className="arrow">→</span>
                                        </a>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
