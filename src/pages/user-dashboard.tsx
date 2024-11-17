import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/dashboard-nav";
import { faArrowDown, faArrowUp,  faEdit, } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReviewModal from "../components/reviewModals";

{/* 
interface StatProp{
    count: number,
    description: string
}
const StatItem: React.FC<StatProp> = ({ count, description }) =>{
    return(
        <div className="">
            <h1 className="text-[16px] text-primary">{count} <span className="text-dark">{description}</span></h1>
        </div>
    )
*/}


{/*
interface BlogProp{
    category: string,
    heading: string
}

const BlogPosts: React.FC<BlogProp> = ({ category, heading }) =>{
    return(

        <article className="flex mt-5 w-[420px] h-[90px] shadow-lg bg-white p-2">
            <div className="w-[80px] h-[100%] bg-secondary rounded-lg">
            </div>

            <div className="ml-3 flex flex-col justify-center">
                <h2 className="font-semibold">{category}</h2>
                <h6 className="">{heading}</h6>
            </div>

        </article>

    )
}

*/}
interface LogProp{
    id: number,
    service: string;
    description: string;
    address: string,
    region: string;
    state: string;
    date: string;
    time: string;
    duration: number,
    status: string


    isOpen: boolean;
    onToggle: () => void;
}

const LogItem: React.FC<LogProp> = ({ 
    service,
    description, address, region, state,
    status, date, time, duration,

    isOpen, onToggle }) => {
    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)

    return(
        <div className="flex flex-col">
            <div className="bg-secondary px-3 py-1 
                flex justify-between items-center gap-3"
                onClick={onToggle}>

                <div className="flex items-center gap-2">
                    <h1 className="">{service} on {date} ({status})</h1>
                </div>
                
                <span className="transform bg transition-transform duration-200">
                {isOpen ? 
                    <FontAwesomeIcon
                    icon={faArrowUp}>
                    </FontAwesomeIcon> 
                    :
                    <FontAwesomeIcon
                    icon={faArrowDown}>
                    </FontAwesomeIcon>}
                </span>
            </div>

            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-60' : 'max-h-0'}`}
            >
                <div className="p-4 mt-[-2px] bg-secondary ">
                    <ul className="text-[16px]">
                        <li>time: {time}</li>
                        <li>Location: {address}, {region}, {state}</li>
                        <li>Description: {description}</li>
                        <li>Duration: {duration}</li>
                    </ul>
                </div>
                <button
                    type="button"
                    className="bg-primary w-full py-1 duration-700 ease-in-out"
                    onClick={openModal}
                >
                    Give Review
                </button>
            {modalOpen && (<ReviewModal
            closeModal={closeModal}
            ></ReviewModal>
            )}
            </div>

        </div>
    )
}


type Booking = {
    id: number,
    service: string;
    description: string;
    address: string,
    region: string;
    state: string;
    date: string;
    time: string;
    duration: number,
    status: string
}
const UserDashboard = () =>{
    const [user, setUser] = useState<any>(null);
    const [bookings, setBookings] = useState<Booking[] | null>(null)
    const [stat, setStats] = useState<number | null>(null)
    const [error, setError] = useState<string | null>(null);
    
    const token = localStorage.getItem('authToken');
    if (!token){
        console.log('No token found')
    }

    const fetchStats = async () => {
        try {
            const response = await fetch('https://fixit-api-u7ie.onrender.com/profile/user-stat/', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Token ${token}`
                },
            })
            if(!response.ok){
                throw new Error("No logs to fetch");
            }
            const data = await response.json() // Log response for debugging

            // Check if total_booking exists and is a number before setting state
            if (data && typeof data.total_booking === 'number') {
                setStats(data.total_booking);
            } else {
                throw new Error('Invalid data format received');}
        }
        catch(error) {
            setError((error as Error).message)
        }
    }
    useEffect(() => {
        fetchStats()
    }, [])
    // GET endpoint for the user's booking log
    const fecthBooking = async () => {
        try {
            const response = await fetch('https://fixit-api-u7ie.onrender.com/profile/user_booking_log/', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Token ${token}`
                },
            })
            if(!response.ok){
                throw new Error("No logs to fetch");
            }
            const data = await response.json()
            setBookings(data);
        }

        catch(error) {
            setError((error as Error).message)
        }
    }
    useEffect(() => {
        fecthBooking()
        }
    ,[])

    useEffect(() => {
        fetch('https://fixit-api-u7ie.onrender.com/profile/me/', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch user data");
            }
            return res.json();
        })
        .then((data) => {
            setUser(data);
        })
        .catch((error) => {
            setError(error.message);
            console.error(error);
        });
    },[])

    ;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Header/>
            <section className=" sm:px-10  pt-[20px] flex flex-col justify-center items-center lg:items-center gap-5 z-[3]">
                
                <div className="w-full sm:w-[550px] lg:w-[720px] h-32 -mb-20 bg-accent relative 
                    rounded-b-[40px] md:rounded-t-2xl">
                </div>
                <article className="w-full sm:w-[550px] lg:w-[720px] h-fit-content
                    px-2 pb-4 bg-white shadow-lg rounded-md flex flex-col">
                    <div className="flex items-end">
                        <div className="w-[120px] h-[120px] bg-dark rounded-full z-10"></div>
                        <Link to="/create-profile" className="relative ml-auto">
                            <motion.div whileTap={{ y: 20 }} transition={{ duration: 0.6 }}>
                                <FontAwesomeIcon icon={faEdit} size="xl" />
                            </motion.div>
                        </Link>
                    </div>
                    <main className="flex flex-col px-4">
                        <div className="md:text-start">
                            {user ? (
                                <>
                                    <h3 className="text-[22px] font-semibold">
                                        {user.firstname} {user.lastname}
                                    </h3>
                                    <div className="my-2 text-faded gap-10">
                                        <p>{user.address},</p>
                                        <p>{user.region}, {user.state}</p>
                                    </div>
                                </>
                            ) : (
                                <p>Loading user data...</p>
                            )}
                            {error && <p className="text-red-500 font-semibold">{error}</p>}
                            {!error && (
                                <p className="text-primary font-semibold">
                                    {stat !== null ? `${stat} bookings` : "Loading..."}
                                </p>
                            )}
                        </div>
                    </main>
                </article>
                <div className="w-full sm:w-[550px] lg:w-[720px] flex flex-col xl:flex-row">
                    <article>
                            <h1 className="font-bold text-xl mb-3">Your Logs</h1>
                            <div className=" bg-white  p-3 h-fit border-white">
                                <article className="lg:w-[720px] overflow-y-scroll h-[350px] px-3 bg-white flex flex-col gap-2">
                                {bookings && bookings.length > 0 ? (
                                    bookings.map((booking) => (
                                        <LogItem
                                        key={booking.id}
                                        id={booking.id}
                                        service={booking.service}
                                        description={booking.description}
                                        time={booking.time}
                                        address={booking.address}
                                        region={booking.region}
                                        state={booking.state}
                                        status={booking.status}
                                        date={booking.date}
                                        duration={booking.duration}

                                        isOpen={openIndex === booking.id}
                                        onToggle={() => handleToggle(booking.id)}
                                    />
                                    ))
                                ) :
                                <p>Booking log is empty</p>
                                }
                                </article>
                            </div>


                    </article>
                </div>
            </section>
        </>
    );
};

export default UserDashboard;