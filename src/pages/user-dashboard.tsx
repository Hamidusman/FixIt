import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardNav from "../components/dashboard-nav";
import { faFaucet, faHammer, faVault, faWrench, IconDefinition } from "@fortawesome/free-solid-svg-icons";

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
    faIcon: IconDefinition,
    category: string
}


const Log: React.FC<LogProp> = ({ faIcon, category }) =>{
    return(
        
        <div className="bg-secondary px-2 py-1 flex items-center gap-3">
        <FontAwesomeIcon
         icon={faIcon}
         size="lg"
         className="p-2 rounded-full bg-white">

        </FontAwesomeIcon>

        <h1>Request for {category} on (pending)</h1>

    </div>
    )
}
const UserDashboard = () =>{

    return(
        <>
        <DashboardNav />
        <section className="w-[100vw] px-2 py-[20px] flex flex-col md:flex-row gap-10">
            <div className="flex flex-col">
                
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

            <section className="mt-[30px]">
                <h1 className="font-bold text-xl">Latest Blogposts</h1>

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
            <aside>
                <h1 className="font-bold text-xl">Logs</h1>
                <article className="w-[420px] md:w-[680px] px-3 py-3 h-fit bg-white flex flex-col gap-2">
                    <Log
                    faIcon={faHammer}
                    category="Carpenter">

                    </Log>
                </article>
            </aside>
        </section>
        
        </>
    )
}

export default UserDashboard