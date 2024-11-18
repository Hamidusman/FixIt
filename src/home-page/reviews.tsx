interface ReviewProps{
    rating: number,
    comment: string,
    customer: string
}

const ReviewItem: React.FC<ReviewProps> = ({ rating, comment, customer }) => {
    return(
            <article className="shadow-2xl py-12 px-10 w-[360px] sm:w-[420px] min-h-[320px] bg-white rounded-xl
                                flex flex-col justify-between">
                <span className=" font-extrabold text-primary text-xl">{rating}/5</span>
                <p className="text-lg my-3">{comment}</p>
                
                <p className="font-bold text-[18px]">{customer}</p>
            </article>
        
    )
}

const Reviews = () => {

    const reviews = [
        {
            name: "John Doe",
            content: "The service was exceptional from start to finish. The team was professional, efficient, and went above and beyond to ensure everything was done to my satisfaction. Highly recommended!",
            rating: 5
        },
        {
            name: "Jane Smith",
            content: "I had a great experience overall, but there were a few minor issues that delayed the process. However, the staff was quick to respond and resolve everything. I would definitely use their services again!",
            rating: 4
        },

        {
            name: "Samuel Green",
            content: "Fantastic job! The team worked tirelessly and delivered outstanding results. I'm very pleased with their attention to detail and the quality of their work. Will be recommending them to my friends and family.",
            rating: 5
        }
    ]

    return(
        <section className=" mx-5 md:mx-20 my-20">
            <h1 className='text-[33px] lg:text-[40px] text-center font-bold my-10'>What Our Clients <span className='text-primary'>Say</span></h1>

            <div className="gap-5 flex flex-wrap justify-center">
                {reviews.map((review, index) => (
                    <ReviewItem
                        key={index}
                        rating={review.rating}
                        comment={review.content}
                        customer={review.name}>
                    </ReviewItem>
                    
                

                ))}
                
                
            </div>


        </section>
    )
}

export default Reviews