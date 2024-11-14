import { motion } from "framer-motion"

interface BackdropProp {
    children: React.ReactNode,
}
const Backdrop: React.FC<BackdropProp> = ({children}) => {
    
    return (
        <motion.div
        initial={{ opacity: 0}}
        animate= {{opacity: 1}}
        exit= {{opacity: 0}}
        className="fixed top-0 left-0 w-full h-full bg-[#000000e1]
                flex justify-center items-center"
        >
            {children}

        </motion.div>
    )
}

export default Backdrop