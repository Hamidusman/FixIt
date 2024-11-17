import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface RevealItem{
    children: React.ReactNode,
}

const Reveal: React.FC<RevealItem> = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <div ref={ref} style={{ overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1.2 }}
                initial="hidden"
                animate={controls}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
