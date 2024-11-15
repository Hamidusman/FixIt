import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { easeInOut } from "framer-motion/dom"
const GetStarted = () =>{
    return(
        <motion.div
        whileHover={{rotate: '-2.5deg'}}
        whileTap={{rotate: '2.5deg'}}
        transition={{duration: '0.4', ease:easeInOut}}
        >
            <Link to='/booking' className="index-2 px-7 py-3 
            bg-primary hover:bg-dark hover:text-primary 
            transition duration-500 text-dark 
            font-medium rounded-2xl text-[16px] 
            md:text-base"
            >
                Start Now
            </Link>
        </motion.div>
    )
}

export default GetStarted