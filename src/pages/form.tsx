import { AnimatePresence } from "framer-motion";
import React, { useState } from "react"
import Calendar, {CalendarProps} from "react-calendar"
import 'react-calendar/dist/Calendar.css'
import Modal from "../components/modal";

interface BookingProp {
    service: string;
    phone_number: string;
    description: string;
    address: string,
    region: string;
    state: string;
    date: string;
    time: string;
    duration: number,
    status: string
}


const BookingForm: React.FC = () =>{

    const [booking, setBooking] = useState<BookingProp>({
        service: '',
        phone_number: '',
        description: '',
        address: '',
        region: '',
        state: '',
        date: '',
        time: '',
        duration: 15,
        status: 'pending',

    })
    const [error, setError] = useState<string>('')
    const [modalOpen, setModalOpen] = useState(false)

    const closeModal = () => setModalOpen(false)
    const stateToRegions: { [key: string]: string[] } = {
        Abuja: ["Jabi", "Gwarinpa", "Wuse"],
        Kaduna: ["Kawo", "Barnawa", "Ungwan Rimi"],
        Lagos: ["Lekki", "Ikeja", "Victoria Island"],
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setBooking((prevData) =>({
            ...prevData,
            [name]: value,
            ...(name === "state" && { region: "" })
        }));
    };

    const handleDateChange: CalendarProps['onChange'] = value => {
        if (value instanceof Date) {
            setBooking((prevData) => ({
                ...prevData,
                date: value.toISOString().split('T')[0]
            }))
        }
    } 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(``)

        try {
            const token = localStorage.getItem('authToken')
            const response = await fetch('http://127.0.0.1:8000/booking/', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `token ${token}`
                },
                body: JSON.stringify(booking)
            });
            if (!response.ok){
                const errorData = await response.json();
                console.error("Error details:", errorData);
                throw new Error("Couldn't book your request")
            }
            const data = await response.json()
            setModalOpen(true)
            console.log("Created booking: ", data)
        }
        catch (err){
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred.");
            }

        }
    }

    return(
        <section className="mb-20 mx-5 md:px-40">
            <div className="my-10 text-center">
                <h1 className="text-3xl font-bold">Hire A Fixer Now</h1>
                <p className="text-lg">Lorem, ipsum dolor sit amet consectetur.</p>
            </div>

            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                    <p className="font-bold text-xl mb-2">Who do you need?:</p>
                    <label htmlFor="" className="flex gap-2">
                        <input type="radio" name="service" onChange={handleChange} value='Electrician' />
                        <p>Electrician</p>
                    </label>
                    <label htmlFor="" className="flex gap-2">
                        <input type="radio" name="service" onChange={handleChange} value='Plumber' />
                        <p>Plumber</p>
                    </label>
                </div>

                <label htmlFor="" className="font-bold text-xl">Description</label>
                <textarea
                    name='description' value={booking.description} onChange={handleChange}
                    className="focus:ring-2 focus:ring-primary focus:outline-none
                            bg-accent_low  min-h-40 max-h-40 rounded-lg p-5"
                            placeholder="Repair or Maintainance"></textarea>

                <label htmlFor="" className=" flex flex-col gap-2">
                    <p className="font-bold text-xl">Address</p>
                    <input type="text"
                        name="address" value={booking.address} onChange={handleChange}
                        className="focus:ring-2 focus:ring-primary focus:outline-none
                                bg-accent_low md:w-[100%] w-full h-[50px] rounded-lg 
                                hover:text-pr px-5" placeholder="State the location" />
                </label>
                
                <label htmlFor="" className="flex gap-2 justify-center lg:justify-start">
                    <Calendar onChange={handleDateChange} />
                </label>
                
                <div className="">
                    <label htmlFor="" className="flex flex-col gap-2">
                        <p className="font-bold text-xl">Time</p>
                        <input type="time" 
                            name="time" 
                            value={booking.time}
                            onChange={handleChange}
                            className="bg-accent_low px-3 py-2 rounded-lg w-[270px] h-[50px] sm:w-[420px] hover:text-pr" />
                    </label>
                    <label htmlFor="" className="flex flex-col mt-2 gap-2">
                        <div>
                        <p className="font-bold text-xl">Estimated Minutes</p>
                        <p className="text-sm">(The base price is $10 and is increased by 5 at every 15 minutes. Not permenant)</p>
                        </div>
                        <select name="duration"value={booking.duration} onChange={handleChange} 
                            className="bg-accent_low font-normal
                            px-3 py-2 rounded-lg
                            sm:w-[420px] p-1  
                            border-b-dark border-b-2 focus:outline-none"
                            >
                            <option value="15" className="hover:bg-primary">15</option>
                            <option value="30" className="hover:bg-primary">30</option>
                            <option value="45" className="hover:bg-primary">45</option>
                            <option value="60" className="hover:bg-primary">60</option>
                        </select>
                    </label>

                    <div className="flex font-bold flex-col gap-2 my-3">
                        <p className=" text-xl">State</p>
                        <select name="state"
                            value={booking.state}
                            onChange={handleChange}
                            className="bg-accent_low font-normal px-3 py-2
                                        rounded-lg  sm:w-[420px] p-1
                                        border-b-dark border-b-2 focus:outline-none">
                            <option value="">-- Select State --</option>
                            <option value="Abuja">Abuja</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Lagos">Lagos</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-xl">Region</p>
                        <select name="region"
                                value={booking.region}
                                onChange={handleChange}
                                className="bg-accent_low font-normal px-3 py-2 rounded-lg 
                                            sm:w-[420px] p-1 border-b-dark border-b-2
                                            focus:outline-none">
                                <option value="">-- Select Region --</option>
                                {booking.state &&
                                    stateToRegions[booking.state].map((region) => (
                                    <option key={region} value={region}>
                                        {region}
                                    </option>
                                    ))}
                        </select>
                    </div>
                </div>

                <div className="flex font-bold flex-col md:flex-row justify-between gap-5 lg:gap-10">

                    <label htmlFor="" className="md:w-[50%] flex flex-col gap-2">
                        <p className=" text-xl">Phone Number</p>
                        <input type="number" name="phone_number" value={booking.phone_number} onChange={handleChange} className="focus:ring-2 font-normal focus:ring-primary focus:outline-none bg-accent_low sm:w-[420px] h-[50px] rounded-lg hover:text-pr px-5"
                                    placeholder="08160803194"/>
                    </label>
                
                </div>

                <div className="text-center">
                <button
                    type="submit"
                    className="px-20 md:px-[220px] py-3 rounded-2xl border bg-primary hover:text-primary 
                        hover:bg-dark transition duration-500 ease-in-out font-bold text-xl"
                >
                    Submit
                </button>

                    <AnimatePresence initial={false} mode="wait"
                    onExitComplete={() => null}>
                        {modalOpen && !error && (
                            <Modal
                                handleClose={closeModal}
                                status="Booking Successful"
                                text="You've successfully booked for a serviceman. You will be in contact with him very soon."
                            />
                        )}
                    </AnimatePresence>

                    {/* Error message display */}
                    {error && <div className="error-message text-red-500 mt-4">{error}</div>}
                </div>
            </form>
        </section>
    )
}

export default BookingForm