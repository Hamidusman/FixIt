import { section } from "framer-motion/client";


function Reviews(){
    return(
        <section className="mx-5 md:mx-20 my-20">
            <h1 className='text-[40px] text-center font-bold my-10'>What Our Clients <span className='text-primary'>Say</span></h1>

            <div className="gap-5 w-full flex flex-wrap justify-center">
                <article className="shadow-2xl py-12 px-10 w-full sm:w-[480px] min-h-[350px] max-h-[750px] bg-white rounded-xl
                                    flex flex-col justify-between">
                    <span className="font-bold">5/5</span>
                    <p className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quia dolorem excepturi, magnam libero facilis id maiores velit numquam iste eum soluta minus blanditiis laborum dolor non quis explicabo nulla.</p>
                    
                    <p className="font-bold text-[18px] ">Abdulhamid Usman</p>
                </article>
                
                <article className="shadow-2xl py-12 px-10 w-full sm:w-[480px] min-h-[350px] max-h-[750px] bg-white rounded-xl
                                    flex flex-col justify-between">
                    <span className="font-bold">5/5</span>
                    <p className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quia dolorem excepturi, magnam libero facilis id maiores velit numquam iste eum soluta minus blanditiis laborum dolor non quis explicabo nulla.</p>
                    
                    <p className="font-bold text-[18px] ">Abdulhamid Usman</p>
                </article>
                
            </div>


        </section>
    )
}

export default Reviews