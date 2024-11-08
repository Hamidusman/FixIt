import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardNav from "../components/dashboard-nav";
import { faArrowDown, faArrowUp,  faEdit,  faHammer, faLightbulb, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "../utils/axiosConfig";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface StatProp{
    count: number,
    description: string
}

const StatItem: React.FC<StatProp> = ({ count, description }) =>{
    return(
        <div className="flex flex-col">
            <h1 className="text-[22px] text-primary font-extrabold">{count}</h1>
            <p>{description}</p>
        </div>
    )
}


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
    faIcon: IconDefinition;
    category: string;

    isOpen: boolean;
    onToggle: () => void;
}

const LogItem: React.FC<LogProp> = ({ faIcon, category, isOpen, onToggle }) => {
    return(
        <div className="flex flex-col">
            <div className="bg-secondary px-3 py-1 
                flex justify-between items-center gap-3"
                onClick={onToggle}>

                <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                    icon={faIcon}
                    size="lg"
                    className="px-3 py-2 rounded-full text-accent hover:animate-pulse">
                    </FontAwesomeIcon>
                    <h1 className="">Request for {category} on (pending)</h1>
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
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}
            >
                <div className="p-4 mt-[-2px] bg-secondary ">
                    <ul className="text-[16px]">
                        <li>Date: 18-09-2024</li>
                        <li>Location: 5th Avenue</li>
                        <li>Description: Problem stated</li>
                        <li>Status: Completed | Pending | Cancelled</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
const UserDashboard = () =>{
    const [user, setUser] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    
    const token = localStorage.getItem('authToken');
    if (!token){
        console.log('No token found')
    }

    useEffect(() => {
        fetch('http://127.0.0.1:8000/profile/me/', {
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
    })

    ;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <DashboardNav />
            <section className="pt-[20px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
                <article className="w-full h-[fit-content] bg-white shadow-lg rounded-md p-4 flex flex-col items-center text-center">
                    <Link to='/create-profile' className="relative ml-auto">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ y: 5 }}
                            transition={{ duration: 0.6 }}>
                            <FontAwesomeIcon icon={faEdit} size="xl" />
                        </motion.div>
                    </Link>
                    <div className="w-[90px] h-[90px] bg-dark rounded-full"></div>
                    <main className="flex flex-col px-2 justify-center pt-5">
                        <div className="text-center">
                            {user ? (
                                <>
                                    <h3 className="text-[18px] font-semibold">
                                        {user.firstname} {user.lastname}
                                    </h3>
                                    <p>{user.state}</p>
                                    <p>{user.phone_number}</p>
                                </>
                            ) : (
                                <p>Loading user data...</p>
                            )}
                        </div>


                        <div className="mt-5 flex gap-3">
                            <StatItem count={2} description="Completed" />
                            <StatItem count={2} description="Jobs Booked" />
                            <StatItem count={2} description="Pending" />
                        </div>
                    </main>
                </article>
                <div className="flex flex-col xl:flex-row">
                    <article>
                        <aside>
                            <h1 className="font-bold text-xl mb-3">Your Logs</h1>
                            <div className="bg-red w-fit h-fit border-[10px] border-white">
                                <article className="w-[360px] sm:w-[420px] lg:w-[460px] overflow-y-scroll h-[350px] px-3 bg-white flex flex-col gap-2">
                                    <LogItem
                                        faIcon={faHammer}
                                        category="Carpenter"
                                        isOpen={openIndex === 0}
                                        onToggle={() => handleToggle(0)}
                                    />
                                    <LogItem
                                        faIcon={faLightbulb}
                                        category="Electrician"
                                        isOpen={openIndex === 1}
                                        onToggle={() => handleToggle(1)}
                                    />
                                </article>
                            </div>
                        </aside>
                    </article>
                </div>
            </section>
        </>
    );
};

export default UserDashboard;