import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="section" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p>
                        I am a final-year B.Tech student with a strong passion for Artificial Intelligence and Deep Learning.
                        My journey bridges the gap between complex model architectures and real-world applications.
                        I specialize in building intelligent systems, from pothole detection using Computer Vision to Resume Analysis using Gemini API.
                        I am constantly exploring new technologies to solve challenging problems.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
