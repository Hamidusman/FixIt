import DashboardNav from "../components/dashboard-nav";

interface StatProp{
    count: number,
    description: string
}

const StatItem: React.FC<StatProp> = ({ count, description }) =>{
    return(
        <article className="rounded-tl-[30px] rounded-br-[30px] shadow-2xl w-[150px] h-[150px] bg-primary flex flex-col justify-center px-5">
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

const UserDashboard = () =>{

    return(
        <>
        <DashboardNav />
        <section className="w-[100vw] px-10 py-[20px] flex gap-10">
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
        </section>
        
        </>
    )
}

export default UserDashboard