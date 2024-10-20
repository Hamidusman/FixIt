import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css'
const Form = () =>{

    return(
        <section className="mb-20 mx-5 md:px-40">
            <div className="my-10 text-center">
                <h1 className="text-3xl font-bold">Hire A Fixer Now</h1>
                <p className="text-lg">Lorem, ipsum dolor sit amet consectetur.</p>
            </div>

            <form action="" className="flex flex-col gap-5">
                <div>
                    <p className="font-bold text-xl mb-2">I Need A:</p>
                    <label htmlFor="" className="flex gap-2">
                        <input type="radio" name="" id="" value='sdw' />
                        <p>Electritian</p>
                    </label>
                    <label htmlFor="" className="flex gap-2">
                        <input type="radio" name="" id="" value='sdw' />
                        <p>Plumber</p>
                    </label>
                    <label htmlFor="" className="flex gap-2">
                        <input type="radio" name="" id="" value='sdw' />
                        <p>Carpenter</p>
                    </label>
                </div>
                <label htmlFor="" className="font-bold text-xl">Description</label>
                <textarea className="focus:ring-2 focus:ring-primary focus:outline-none bg-accent_low w-full min-h-40 max-h-40 rounded-lg p-5" name="" id=""></textarea>

                <label htmlFor="" className=" flex flex-col gap-2">
                    <p className="font-bold text-xl">Location</p>
                    <input type="text" className="focus:ring-2 focus:ring-primary focus:outline-none bg-accent_low md:w-[660px] w-full h-[50px] rounded-lg hover:text-pr px-5" />
                </label>
                
                <label htmlFor="" className="flex gap-2 justify-center lg:justify-start">
                    <Calendar />
                </label>
                
                <div>
                    <label htmlFor="" className="flex flex-col gap-2">
                        <p className="font-bold text-xl">Time</p>
                        <input type="time" className="bg-accent_low px-3 py-2 rounded-lg w-[270px] h-[50px] xl:w-[320px] hover:text-pr" />
                    </label>
                    <label htmlFor="" className="flex flex-col gap-2">
                        <p className="font-bold text-xl">Estimated Minutes</p>
                        <select name=""  className="bg-accent_low font-normal px-3 py-2 rounded-lg  md:w-[320px] p-1  border-b-dark border-b-2 focus:outline-none">
                        <option value="" className="hover:bg-primary">15</option>
                        <option value="" className="hover:bg-primary">30</option>
                        <option value="" className="hover:bg-primary">45</option>
                        <option value="" className="hover:bg-primary">60</option>
                        </select>
                    </label>
                    <div className="flex font-bold flex-col gap-2 my-3">
                        <p className=" text-xl">Location (State)</p>
                        <select name=""  className="bg-accent_low font-normal px-3 py-2 rounded-lg  md:w-[320px] p-1  border-b-dark border-b-2 focus:outline-none">
                            <option value="" className="hover:bg-primary">Abuja</option>
                            <option value="">Kaduna</option>
                            <option value="">Lagos</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-xl">District</p>
                        <select name=""  className="bg-accent_low font-normal px-3 py-2 rounded-lg md:w-[320px] p-1  border-b-dark border-b-2 focus:outline-none">
                            <option value="" className="">Abuja</option>
                            <option value="">Kaduna</option>
                            <option value="">Lagos</option>
                        </select>
                    </div>
                </div>

                <div className="flex font-bold flex-col md:flex-row justify-between gap-5 lg:gap-10">
                    <label htmlFor="" className="md:w-[50%] flex flex-col gap-2">
                        <p className=" text-xl">First Name</p>
                        <input type="text" className="focus:ring-2 font-normal focus:ring-primary focus:outline-none bg-accent_low h-[50px] rounded-lg hover:text-pr px-5"
                                    placeholder="John" />
                    </label>
                    
                    <label htmlFor="" className="md:w-[50%] flex flex-col gap-2">
                        <p className=" text-xl">Last Name</p>
                        <input type="text" className="focus:ring-2 font-normal focus:ring-primary focus:outline-none bg-accent_low w-full h-[50px] rounded-lg hover:text-pr px-5"
                                    placeholder="Doe"/>
                    </label>
                
                </div>

                <div className="flex font-bold flex-col md:flex-row justify-between gap-5 lg:gap-10">
                    <label htmlFor="" className="md:w-[50%] flex flex-col gap-2">
                        <p className=" text-xl">Email</p>
                        <input type="email" className="focus:ring-2 font-normal focus:ring-primary focus:outline-none bg-accent_low h-[50px] rounded-lg hover:text-pr px-5"
                                    placeholder="abdulhamidusman218@gmail.com" />
                    </label>
                    
                    <label htmlFor="" className="md:w-[50%] flex flex-col gap-2">
                        <p className=" text-xl">Phone Number</p>
                        <input type="number" className="focus:ring-2 font-normal focus:ring-primary focus:outline-none bg-accent_low w-full h-[50px] rounded-lg hover:text-pr px-5"
                                    placeholder="08160803194"/>
                    </label>
                
                </div>

                <div className="text-center">
                    
                <button type="submit" className="px-20 md:px-40 py-3 rounded-2xl border bg-primary hover:text-primary hover:bg-dark transition duration-500 ease-in-out font-bold text-xl">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default Form