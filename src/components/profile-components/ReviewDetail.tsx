import { ReviewDetailProp } from "../props/ReviewProps"

interface ReviewProp {
    review: ReviewDetailProp | null
}

export const ReviewDetail: React.FC<ReviewProp> = ({review}) => {
            return (
                <>
                {review ? (
                        <>
                        
                    <p><strong>Rating:</strong> {review.rating}</p>
                    <p><strong>Comment:</strong> {review.comment ? review.comment : '/' }</p></>
                    
                    ): <p>Not Reviewed</p> }</>
            )
        }