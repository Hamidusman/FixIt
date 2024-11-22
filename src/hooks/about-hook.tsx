import Reveal from '../assets/reveal';
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AboutProp{
    title: string,
    content: string,
    icon: any
}
const AboutCard: React.FC<AboutProp> = ({title, content, icon}) =>{
    return(
        <motion.article
        initial={{ opacity: 0, y: 50 }}  // Initial state before the animation
        animate={{ opacity: 1, y: 0 }}   // Final state after the animation
        exit={{ opacity: 0, y: 50 }}     // Optional exit state
        transition={{ duration: 0.7 }}   // Duration for enter and exit animation
        whileHover={{ y: -20 }} 
        className="shadow-2xl bg-white mb-5 px-5
                    py-5 rounded-2xl  lg:w-[390px]
                    flex-flex-col
                    ">
            <Reveal
                duration='1.2'>
                <h1 className="font-bold text-[22px]">{title}</h1>
                <p className="my-4">{content}</p>
                <div className=''>
                    <FontAwesomeIcon icon={icon} size='xl' className=' mb[] p-5 w-[30px] h-[30px] bg-primary rounded-[100%] '/>
                </div>
            </Reveal>
        </motion.article>
    )
}

export default AboutCard