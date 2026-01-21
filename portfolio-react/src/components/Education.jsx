import { motion } from 'framer-motion';

const Education = () => {
    const handleMouseMove = (e) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        currentTarget.style.setProperty('--mouse-x', `${x}px`);
        currentTarget.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section className="section" id="education">
            <div className="container">
                <h2 className="section-title">Education & Certifications</h2>
                <motion.div
                    className="education-item"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    onMouseMove={handleMouseMove}
                >
                    <h3>Bachelor of Technology in CSE</h3>
                    <p>Deogiri Institute of Engineering and Management Studies | 2022 – 2026</p>
                    <p>Relevant Coursework: Machine Learning, Deep Learning, Data Structures & Algorithms, DBMS</p>
                </motion.div>

                <motion.div
                    className="education-item certifications"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    onMouseMove={handleMouseMove}
                >
                    <h4>Certificates</h4>
                    <ul>
                        <li>Supervised Machine Learning: Regression and Classification – Stanford University</li>
                        <li>Programming for Everybody (Getting Started with Python) – University of Michigan</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="education-item awards"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    onMouseMove={handleMouseMove}
                >
                    <h4>Awards</h4>
                    <ul>
                        <li>Passed the Dr. Homi Bhabha Balvaidnyanik Competition.</li>
                        <li>Indigo Squad Member at Mood Indigo, IIT Bombay (2023).</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
