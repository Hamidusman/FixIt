interface ReviewDetailProps {
    booking: number;
    rating: number;
    comment: string;
}

export const ReviewDetail: React.FC<{ review: ReviewDetailProps }> = ({ review }) => {
    return (
        <div className="bg-gray-100 p-3 rounded">
            <p><strong>Rating:</strong> {review.rating}/5</p>
            <p><strong>Comment:</strong> {review.comment}</p>
        </div>
    );
};
