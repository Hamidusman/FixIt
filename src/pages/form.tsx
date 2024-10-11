import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css' 

const Form = () =>{

    return(
        <section className="mb-20 mx-5 md:mx-20">
            <div className="my-10 text-center">
                <h1 className="text-3xl font-bold">Need help? No worries.</h1>
                <p className="text-lg">Lorem, ipsum dolor sit amet consectetur.</p>
            </div>

            <form action="" className="flex flex-col gap-5">
                <label htmlFor="">Description</label>
                <textarea className="focus:ring-1 focus:ring-primary focus:outline-none bg-accent_low w-full min-h-40 max-h-40 rounded-lg p-5" name="" id=""></textarea>

                <label htmlFor="" className="font-bold flex flex-col gap-2">
                    <p>Location</p>
                    <input type="text" className="focus:ring-1 focus:ring-primary focus:outline-none bg-accent_low w-full h-[50px] rounded-lg hover:text-pr px-5" />
                </label>
                
                <label htmlFor="" className="flex gap-2 justify-center lg:justify-start">
                    <Calendar />
                </label>
                
                <label htmlFor="" className="flex flex-col gap-2">
                    <p>Time</p>
                    <input type="text" className="w-full h-[50px] rounded-lg hover:text-pr px-5" />
                </label>

                <div className="flex font-bold flex-col md:flex-row justify-between gap-5 lg:gap-10">
                    <label htmlFor="" className="md:w-[50%] flex flex-col gap-2">
                        <p>First Name</p>
                        <input type="text" className="focus:ring-1 focus:ring-primary focus:outline-none bg-accent_low h-[50px] rounded-lg hover:text-pr px-5"
                                    placeholder="John" />
                    </label>
                    
                    <label htmlFor="" className="md:w-[50%] flex flex-col gap-2">
                        <p>Last Name</p>
                        <input type="text" className="focus:ring-1 focus:ring-primary focus:outline-none bg-accent_low w-full h-[50px] rounded-lg hover:text-pr px-5"
                                    placeholder="Doe"/>
                    </label>
                
                </div>

                <div className="flex font-bold flex-col md:flex-row justify-between gap-5 lg:gap-10">
                    <label htmlFor="" className="md:w-[50%] flex flex-col gap-2">
                        <p>Email</p>
                        <input type="email" className="focus:ring-1 focus:ring-primary focus:outline-none bg-accent_low h-[50px] rounded-lg hover:text-pr px-5"
                                    placeholder="abdulhamidusman218@gmail.com" />
                    </label>
                    
                    <label htmlFor="" className="md:w-[50%] flex flex-col gap-2">
                        <p className="">Phone Number</p>
                        <input type="number" className="focus:ring-1 focus:ring-primary focus:outline-none bg-accent_low w-full h-[50px] rounded-lg hover:text-pr px-5"
                                    placeholder="08160803194"/>
                    </label>
                
                </div>

                <div className="text-center">
                    
                <button type="submit" className="px-40 py-3 rounded-2xl border bg-primary hover:bg-primary_dark transition duration-400 ease-in-out font-bold text-xl">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Form