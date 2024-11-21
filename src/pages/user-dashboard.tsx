import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/dashboard-nav";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
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
    duration: number;
    status: string;
    price: number


    isOpen: boolean;
    onToggle: () => void;
}


interface ReviewProp {
    bookingID: number,
    rating: number,
    comment: string
}
const LogItem: React.FC<LogProp> = ({
    id, service,
    description, address, region, state,
    status, date, time, duration, price,

    isOpen, onToggle }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [review, setReview] = useState<ReviewProp | null>(null)
    const [error, setError] = useState<string | null>(null);
    const [logStatus, setLogStatus] = useState(status);

    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)
    const token = localStorage.getItem('authToken');
    if (!token){
        console.log('No token found')
    }
    
    const fetchReview = async () => {
        try {
            const response = await fetch(`https://fixit-api-u7ie.onrender.com/rating/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('authToken')}`
                },
            });
            if (!response.ok) {
                throw new Error('Could not fetch review');
            }
            const data = await response.json();
            setReview(data);
        } catch (error) {
            setError((error as Error).message);
        }
    };
    useEffect(() => {
        if (isOpen) fetchReview();
    }, [isOpen]);

    const updateStatus = async () => {
        if (status === 'pending') {
            try {
                const response = await fetch(`https://fixit-api-u7ie.onrender.com/booking/${id}/`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`,
                    },
                    body: JSON.stringify({ status: 'completed' }),
                });

                if (!response.ok) {
                    throw new Error('Failed to update status');
                }

                const data = await response.json();
                setLogStatus(data.status); // update the local status after successful update
            } catch (error) {
                setError((error as Error).message);
            }
        }
    };

    return(
        <div className="flex flex-col">
            <div className="bg-secondary rounded-t-md px-3 py-1 
                flex justify-between items-center "
                onClick={onToggle}>

                <div className="flex items-center gap-2">
                    <h1 className="">{service} on {date} </h1>
                </div>
                <div>({logStatus})</div>
                
            </div>

            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-60' : 'max-h-0'}`}
            >
                <div className="px-3 py-2 bg-secondary rounded-b-md flex flex-col gap-2 ">
                    <ul className="text-[16px]">
                        <li>Time: {time}</li>
                        <li>Location: {address}, {region}, {state}</li>
                        <li>Description: {description}</li>
                        <li>Duration: {duration}</li>
                        <li>Price: ${price}</li>
                        {error ?(<p></p>): (<p></p>)}

                    </ul>                        {review ? (
                            <>
                            
                        <p><strong>Rating:</strong> {review.rating}</p>
                        <p><strong>Comment:</strong> {review.comment ? review.comment : '/' }</p></>
                        ): ( logStatus === 'completed' && (
                            
                            <button
                                type="button"
                                className="bg-primary w-full py-1 duration-700 ease-in-out rounded-md"
                                onClick={openModal}
                            >
                                Give Review
                            </button>
                        ))}
                        {logStatus === 'pending' && (
                            <button
                                type="button"
                                className="bg-accent w-full py-1 duration-700 ease-in-out rounded-md"
                                onClick={updateStatus}
                            >
                                Mark as Completed
                            </button>
                        )}
                </div>
            {modalOpen && (
            <ReviewModal
                closeModal={closeModal}
                bookingID={id}
                setReview={setReview}
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
    status: string;
    price: number
}

const UserDashboard = () =>{
    const [user, setUser] = useState<any>(null);
    const [bookings, setBookings] = useState<Booking[] | null>(null)
    const [stat, setStats] = useState<{total_booking: number; completed: number} | null>(null)
    const [error, setError] = useState<string | null>(null);
    const [loading, isLoading] = useState(true)
    
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
                throw new Error("No counts to fetch");
            }
            const data = await response.json() // Log response for debugging

            // Check if total_booking exists and is a number before setting state
            if (data && typeof data === 'object' && 'total_booking' in data) {
                setStats(data);
            } else {
                throw new Error('Invalid data format received');}
        }
        catch(error) {
            setError((error as Error).message)
        } finally{
            isLoading(false)
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
            <section className=" sm:px-10  pt-2 md:pt-4 flex flex-col justify-center items-center lg:items-center gap-5 z-[3]">
                
                <div className="w-full sm:w-[550px] lg:w-[720px] h-32 -mb-20 bg-accent relative 
                    rounded-b-[40px] md:rounded-t-2xl">
                </div>
                <article className="w-full sm:w-[550px] lg:w-[720px] h-fit-content
                    px-2 pb-4 bg-white shadow-lg rounded-md flex flex-col">
                    <div className="flex items-end">
                        <div className="w-[120px] h-[120px] bg-dark rounded-full relative"></div>
                        <Link to="/create-profile" className="relative ml-auto">
                            <motion.div whileTap={{ y: 20 }} transition={{ duration: 0.6 }}>
                                <FontAwesomeIcon icon={faEdit} size="xl" />
                            </motion.div>
                        </Link>
                    </div>
                    <main className="flex flex-col px-2 mt-2">
                        <div className="md:text-start">
                            {loading ? (
                                    
                                    <div className="w-[90px] bg-secondary px-3 py-3 animate-pulse
                                    flex justify-between items-center gap-3"
                                    >
                                </div>
                                ) : user ? (
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
                                <p>No profile...</p>
                            )}
                            {error && <p className="text-red-500 font-semibold">{error}</p>}
                            {!error && (
                                <div className="text-primary font-semibold">
                                    {stat ? (
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm md:text-[16px]">{stat?.total_booking ?? 0} Bookings</p>
                                            <p className="text-sm md:text-[16px]">{stat?.completed ?? 0} Completed</p>
                                        </div>
                                    )
                                    : 
                                    <div className="w-[90px] bg-secondary px-3 py-3 animate-pulse
                                    flex justify-between items-center gap-3 mt-2"
                                    >
                                    </div>}
                                </div>
                            )}
                        </div>
                    </main>
                </article>
                <div className="w-full sm:w-[550px] lg:w-[720px] flex flex-col xl:flex-row">
                    <article>
                            <div className=" bg-white  px-4 py-2 h-fit border-white">
                            <div className="flex justify-between">
                                <h1 className="font-bold text-xl mb-3">My Logs</h1>
                                <Link to="/booking"
                                    className=" font-bold transition duration-500
                                    text-accent"
                                    >
                                        Hire A Worker
                                </Link>
                            </div>
                                <article className=" sm:w-[550px] lg:w-[700px] px-2 pb-4 rounded-md bg-white flex flex-col gap-2">
                                {loading ? (
                                    
                                    <div className="bg-secondary rounded-md px-3 py-5 animate-pulse
                                    flex justify-between items-center gap-3"
                                    >
                                    </div>
                                ) : bookings && bookings.length > 0 ? (
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
                                        price={booking.price}
                                        isOpen={openIndex === booking.id}
                                        onToggle={() => handleToggle(booking.id)}
                                    />
                                    ))
                                ) : (
                                    <p>Booking log is empty</p>
                                )}
                                </article>
                            </div>


                    </article>
                </div>
            </section>
        </>
    );
};

export default UserDashboard;