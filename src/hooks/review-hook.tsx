interface ReviewProps{
    rating: number,
    comment: string,
    customer: string
}

export const ReviewItem: React.FC<ReviewProps> = ({ rating, comment, customer }) => {
    return(
            <article className="shadow-2xl py-12 px-10 w-[360px] sm:w-[420px] min-h-[320px] bg-white rounded-xl
                                flex flex-col justify-between">
                <span className=" font-extrabold text-primary text-xl">{rating}/5</span>
                <p className="text-lg my-3">{comment}</p>
                
                <p className="font-bold text-[18px]">{customer}</p>
            </article>
        
    )
}