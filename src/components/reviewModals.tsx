import React, { useState } from 'react';
import Backdrop from './backdrop';
import { motion } from 'framer-motion';

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

// Array of emojis representing ratings from 1 to 5
const emojis = ["😡", "😕", "😐", "😊", "😍"];

interface ReviewModalProps {
  closeModal: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ closeModal }) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [comment, setComment] = useState<string>('');

  const handleEmojiClick = (index: number) => {
    setSelectedRating(index + 1); // Store rating as 1 to 5 based on index
  };

  const submitReview = () => {
    if (selectedRating !== null) {
      const reviewData = {
        rating: selectedRating,
        comment,
      };
      console.log("Review Data to Submit:", reviewData);
    }
    closeModal();
  };

  return (
    <Backdrop onClick={closeModal}>
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing modal
        className="review-modal bg-white p-4 md:px-20 rounded shadow-lg flex flex-col"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="text-xl mb-4 font-bold">Give Review For This Log</h1>
        
        <div className="flex gap-4 mt-4 justify-center">
          {emojis.map((emoji, index) => (
            <motion.div
              key={index}
              onClick={() => handleEmojiClick(index)}
              className={`bg-accent_low text-[35px] w-[50px] h-[50px] flex justify-center items-center rounded-full cursor-pointer transition-transform duration-300 ease-in-out ${
                selectedRating === index + 1 ? 'scale-110' : ''
              }`}
              whileHover={{ scale: 1.2 }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        {selectedRating !== null && (
          <p className="mt-4 text-lg font-semibold text-center">
            {selectedRating} {emojis[selectedRating - 1]}
          </p>
        )}

        <textarea
          className="mt-4 p-2 border rounded w-full"
          placeholder="..."
          value={comment}
          cols={70}
          onChange={(e) => setComment(e.target.value)}
        />

        
        <button
          onClick={submitReview}
          className="mt-4 bg-primary text-white p-2 rounded w-full hover:bg-primary_dark transition-colors duration-300"
        >
          Submit Review
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default ReviewModal;
