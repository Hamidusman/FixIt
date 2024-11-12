import { motion } from "framer-motion";
import Backdrop from "./backdrop";

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

//expected change: need to redirect button to user profile
const Modal: React.FC<ModalProp> = ({ handleClose, status, text}) => {
    return (
        <Backdrop onClick={handleClose}>
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
