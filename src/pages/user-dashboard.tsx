import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/dashboard-nav";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LogItem } from "../hooks/userHooks.tsx/log-hook";
import { apiUrl } from "../utils/BaseUrl";


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

const UserDashboard = () => {
    const [user, setUser] = useState<any>(null);
    const [bookings, setBookings] = useState<Booking[] | null>(null);
    const [stat, setStats] = useState<{ total_booking: number; completed: number } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true); // Main loading state
    const [bookingLoading, setBookingLoading] = useState(true); // Booking-specific loading state
    const [statLoading, setStatLoading] = useState(true); // Stats-specific loading state

    const token = localStorage.getItem('authToken');
    if (!token) {
        console.log('No token found');
        return;
    }

    // Fetch Stats (API call for statistics)
    useEffect(() => {
        if (!token) return; // Only proceed if there's a valid token

        const fetchStats = async () => {
            setStatLoading(true); // Set loading state to true
            try {
                const response = await fetch(`http://127.0.0.1:8000/profile/user-stat/`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Token ${token}`,
                    },
                });

                if (!response.ok) throw new Error('Failed to fetch stats');
                const data = await response.json();
                setStats(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setStatLoading(false); // End loading after fetch is done
            }
        };

        fetchStats();
    }, [token]);

    // Fetch User Booking Log (API call for bookings)
    const fetchBookings = async () => {
        setBookingLoading(true); // Set booking loading state to true
        try {
            const response = await fetch(`${apiUrl}/profile/user_booking_log/`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setBookings(data);
            } else {
                setError('Failed to fetch bookings');
            }
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setBookingLoading(false); // End booking loading after fetch
        }
    };

    useEffect(() => {
        if (token) fetchBookings();
    }, [token]); // Fetch bookings only when token is available

    // Fetch user profile data (GET user data)
    useEffect(() => {
        if (!token) return;

        fetch(`${apiUrl}/profile/me/`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch user data');
                return res.json();
            })
            .then((data) => {
                setUser(data);
            })
            .catch((error) => {
                setError(error.message);
                console.error(error);
            })
            .finally(() => {
                setLoading(false); // Set main loading state to false
            });
    }, [token]); // Only fetch user data if there's a token

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Header />
            <section className=" sm:px-10 pt-2 md:pt-4 flex flex-col justify-center items-center lg:items-center gap-5 z-[3]">
                <div className="w-full sm:w-[550px] lg:w-[720px] h-32 -mb-20 bg-accent relative rounded-b-[40px] md:rounded-t-2xl"></div>
                <article className="w-full sm:w-[550px] lg:w-[720px] h-fit-content px-2 pb-4 bg-white shadow-lg rounded-md flex flex-col">
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
                                <div className="w-[90px] bg-secondary px-3 py-3 animate-pulse flex justify-between items-center gap-3"></div>
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
                                    {statLoading ? (
                                        <div className="w-[90px] bg-secondary px-3 py-3 animate-pulse flex justify-between items-center gap-3 mt-2"></div>
                                    ) : (
                                        stat && (
                                            <div className="flex flex-col gap-1">
                                                <p className="text-sm md:text-[16px]">{stat.total_booking ?? 0} Bookings</p>
                                                <p className="text-sm md:text-[16px]">{stat.completed ?? 0} Completed</p>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    </main>
                </article>

                <div className="w-full sm:w-[550px] lg:w-[720px] flex flex-col xl:flex-row">
                    <article>
                        <div className="w-full lg:w-[720px] bg-white px-4 py-2 h-fit border-white">
                            <div className="flex justify-between">
                                <h1 className="font-bold text-xl mb-3">My Logs</h1>
                                <Link to="/booking" className="font-bold transition duration-500 text-accent">
                                    Hire A Worker
                                </Link>
                            </div>
                            <article className="pb-4 rounded-md bg-white flex flex-col gap-2">
                                {bookingLoading ? (
                                    <div className="bg-secondary rounded-md px-3 py-5 animate-pulse flex justify-between items-center gap-3"></div>
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
