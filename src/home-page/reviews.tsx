import Reveal from "../assets/reveal"

interface ReviewProps{
    rating: number,
    comment: string,
    customer: string
}

const ReviewItem: React.FC<ReviewProps> = ({ rating, comment, customer }) => {
    return(
        <Reveal>
            <article className="shadow-2xl py-12 px-10 w-[360px] sm:w-[420px] min-h-[290px] bg-white rounded-xl
                                flex flex-col justify-between">
                <span className=" font-extrabold text-accent text-xl">{rating}/5</span>
                <p className="text-lg ">{comment}</p>
                
                <p className="font-bold text-[14px] ">{customer}</p>
            </article>
        </Reveal>
        
    )
}

const Reviews = () => {

    return(
        <section className="mx-5 md:mx-20 my-20">
            <h1 className='text-[40px] text-center font-bold my-10'>What Our Clients <span className='text-primary'>Say</span></h1>

            <div className="gap-5 w-full flex flex-wrap justify-center">
                <ReviewItem 
                    rating={4.2} 
                    comment={"Great Job!"} 
                    customer={"Abdulhamid Usman"}>
                </ReviewItem>
                
                <ReviewItem 
                    rating={4.2} 
                    comment={"Great Job!"} 
                    customer={"Abdulhamid Usman"}>
                </ReviewItem>
                
                <ReviewItem 
                    rating={4.2} 
                    comment={"Great Job!"} 
                    customer={"Abdulhamid Usman"}>
                </ReviewItem>
                
            </div>


        </section>
    )
}

export default Reviews