import React, { useState } from 'react';
import Backdrop from './backdrop';
import { motion } from 'framer-motion';


{/* const dropIn = {
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
};*/}


const ReviewModal = () => { 
  const [rating, setRating] = useState<number>(1);
  const [comment, setComment] = useState<string>('');


  return (
    <Backdrop
    
    >
      <motion.div>

      </motion.div>

    </Backdrop>
  );
};

export default ReviewModal