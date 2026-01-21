import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section className="section" id="education">
            <div className="container">
                <h2 className="section-title">Education & Certifications</h2>

                <motion.div
                    className="education-item"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3>Bachelor of Technology (B.Tech)</h3>
                    <p className="highlight">Electronics and Telecommunication Engineering</p>
                    <p>Expected Graduation: 2024</p>
                </motion.div>

                <motion.div
                    className="education-item"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3>Certifications</h3>
                    <div className="certifications">
                        <ul>
                            <li>Accenture North America - Data Analytics and Visualization Job Simulation</li>
                            <li>Udemy - Python for Data Science and Machine Learning Bootcamp</li>
                            <li>Udemy - The Complete Python Bootcamp From Zero to Hero in Python</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
