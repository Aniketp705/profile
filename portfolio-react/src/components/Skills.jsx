import { motion } from 'framer-motion';

const Skills = () => {
    const skillsData = [
        {
            category: "Languages",
            items: ["Python", "C++", "C", "SQL", "JavaScript", "HTML/CSS"]
        },
        {
            category: "Libraries & Frameworks",
            items: ["TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "Pandas", "NumPy", "Matplotlib", "Streamlit", "Flask"]
        },
        {
            category: "Tools & Platforms",
            items: ["Git", "GitHub", "VS Code", "Jupyter Notebook"]
        },
        {
            category: "Concepts",
            items: ["Deep Learning", "Machine Learning", "Computer Vision", "NLP", "Data Structures & Algorithms", "OOPs", "DBMS"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="section" id="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            className="skill-category"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3>{skillGroup.category}</h3>
                            <motion.div
                                className="skill-tags"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {skillGroup.items.map((item, i) => (
                                    <motion.span key={i} variants={itemVariants}>{item}</motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
