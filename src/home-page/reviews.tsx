import { ReviewItem } from "../hooks/review-hook"
import { reviews } from "../data/review-data"

const Reviews = () => {

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