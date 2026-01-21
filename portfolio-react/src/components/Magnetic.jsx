import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const Magnetic = ({ children }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const xVal = clientX - (left + width / 2);
        const yVal = clientY - (top + height / 2);

        x.set(xVal);
        y.set(yVal);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY, display: 'inline-block' }}
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;
