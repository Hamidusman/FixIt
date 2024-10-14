import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardNav from "../components/dashboard-nav";
import { faArrowDown, faArrowUp,  faHammer, faLightbulb, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface StatProp{
    count: number,
    description: string
}

const StatItem: React.FC<StatProp> = ({ count, description }) =>{
    return(
        <article className="rounded-tl-[30px] rounded-br-[30px] shadow-2xl w-[140px] h-[150px] bg-primary flex flex-col justify-center px-5">
            <h1 className="text-3xl font-semibold">{count}</h1>
            <p className="font-medium">{description}</p>
        </article>
    )
}

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
                    className="px-3 py-2 rounded-full text-accent bg-white hover:animate-pulse">
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
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return(
        <>
        <DashboardNav />
        <section className=" px-5 py-[20px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-20">
            <article className="w-[360px] h-[420px] bg-primary  rounded-xl ">
                <header className="h-40 bg-accent flex justify-center items-end rounded-t-xl">
                    <div className="w-[120px] h-[120px] bg-white relative top-[25%] rounded-full"></div>
                </header>

                
                <main className="flex flex-col px-2 justify-center pt-12">
                    <p className="ml-auto">edit</p>
                    <div className="text-center">
                        <h3 className="text-[18px] font-semibold">Abdulhamid Usman</h3>
                        <p className="text-">No 237 GRA, Bida</p>
                        <p>+2348160803194</p>
                    </div>
                </main>
            </article>

            <div className="flex flex-col xl:flex-row gap-20">
                
            <article className="">
                <div className="flex gap-3 flex-wrap">
                    <StatItem
                    count={2}
                    description="Jobs Booked" >
                    </StatItem>
                    
                    <StatItem
                    count={2}
                    description="Completed" >
                    </StatItem>
                    
                    <StatItem
                    count={0}
                    description="Pending" >
                    </StatItem>
                </div>

                <aside>
                    <h1 className="font-bold text-xl mt-10 mb-3">Your Logs</h1>
                    <div className=" bg-red w-fit h-fit border-[10px] border-white">
                    <article className="w-[420px] lg:w-[460px] overflow-y-scroll h-[250px] px-3 bg-white flex flex-col gap-2">
                        <LogItem
                        faIcon={faHammer}
                        category="Carpenter"
                        isOpen={openIndex === 0}
                        onToggle={() => handleToggle(0)}
                        >
                        </LogItem>
                        
                        <LogItem
                        faIcon={faLightbulb}
                        category="Electritian"
                        isOpen={openIndex === 1}
                        onToggle={() => handleToggle(1)}
                        >
                        </LogItem>
                    </article>
                    </div>
                </aside>
            </article>

            <section className="">
                <h1 className="font-bold text-xl">Personalized Blog feeds</h1>
                <BlogPosts 
                 category="Plumbing"
                 heading="How to lorem"
                ></BlogPosts>
                
                <BlogPosts 
                 category="Plumbing"
                 heading="How to lorem"
                ></BlogPosts>
                
                <BlogPosts 
                 category="Plumbing"
                 heading="How to lorem"
                ></BlogPosts>
            </section>



            </div>
        </section>
        
        </>
    )
}

export default UserDashboard