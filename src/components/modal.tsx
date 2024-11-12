import { motion } from "framer-motion";
import Backdrop from "./backdrop";
import ReactConfetti from "react-confetti";
import { useEffect, useState } from "react";

interface ModalProp {
    handleClose: () => void;
    status: string,
    text: string;
}

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

//Under considertion: redirecting Modal button to user profile
const Modal: React.FC<ModalProp> = ({ handleClose, status, text}) => {    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Backdrop onClick={handleClose}>
            <ReactConfetti
            width={screenWidth}
            height={screenHeight}
            recycle={false}
            numberOfPieces={300}
            gravity={0.3}
            colors={['#ff0', '#f0f', '#0ff']}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 9999
            }}
            />
        
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal bg-white p-4 md:px-20 rounded shadow-lg
                            flex flex-col justify-center"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h1 className="text-[25px] mb-2 font-semibold">{status}</h1>
                <p className="tex-lg">{text}</p>
                {/*
                <button onClick={handleClose} className="mt-4 px-6 py-2 bg-primary text-white rounded">
                    Close
                </button>
                */}
            </motion.div>
        </Backdrop>
    );
};

export default Modal;
