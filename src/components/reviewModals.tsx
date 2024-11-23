import React, { useState } from 'react';
import Backdrop from './backdrop';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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

interface ReviewProp {
  bookingID: number,
  rating: number,
  comment: string
}
interface ReviewModalProps {
    closeModal: () => void;
    bookingID: number;
    setReview: React.Dispatch<React.SetStateAction<ReviewProp | null>>;
}


const ReviewModal: React.FC<ReviewModalProps> = ({ closeModal, bookingID, setReview }) => {
    const [rating, setRating] = useState<number | null>(null);
    const [comment, setComment] = useState<string>('');

    const navigate = useNavigate()

    const token = localStorage.getItem('authToken');
    if (!token){
        console.log('No token found')
    }

    const handleEmojiClick = (index: number) => {
    setRating(index + 1); // Store rating as 1 to 5 based on index
};

    const submitReview = async (event: React.FormEvent) => {
      event.preventDefault();
      if (rating === null || comment.trim() === '') {
          return; // validation if rating or comment is empty
      } 
        const reviewData = {
            booking: bookingID,
            rating: rating,
            comment,
        };
        try {
            const response = await fetch("http://127.0.0.1:8000/rating/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`
                },
                body: JSON.stringify(reviewData),
                });
        
                if (response.ok) {
                console.log("Review submitted successfully");
                const data = await response.json()
                setReview(data);  // Update the parent component with the new review data
                closeModal();
                navigate('/user')
                } else {
                console.error("Error submitting review");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        console.log("Review Data to Submit:", reviewData);
        
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
        <h1 className="text-xl mb-4 font-bold">Give Review For This Log {bookingID}</h1>
        
        <div className="flex gap-2 md:gap-4 mt-4 justify-center">
            {emojis.map((emoji, index) => (
            <motion.div
                key={index}
                onClick={() => handleEmojiClick(index)}
                className={`bg-accent_low text-[25px] md:text-[35px] w-[50px] h-[50px]
                flex justify-center items-center rounded-full cursor-pointer transition-transform duration-300 ease-in-out ${
                rating === index + 1 ? 'scale-110' : ''
                }`}
                whileHover={{ scale: 1.25 }}
            >
                {emoji}
            </motion.div>
            ))}
        </div>

        {rating !== null && (
          <p className="mt-4 text-lg font-semibold text-center">
            {rating} {emojis[rating - 1]}
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
