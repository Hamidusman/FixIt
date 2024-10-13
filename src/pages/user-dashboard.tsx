import DashboardNav from "../components/dashboard-nav";

interface StatProp{
    count: number,
    description: string
}

const StatItem: React.FC<StatProp> = ({count, description}) =>{
    return(
        <article className="rounded-tl-[30px] rounded-br-[30px] shadow-2xl w-[150px] h-[150px] bg-primary flex flex-col justify-center px-5">
            <h1 className="text-3xl">{count}</h1>
            <p className="">{description}</p>
        </article>
    )
}

const UserDashboard = () =>{

    return(
        <>
        <DashboardNav />
        <section className="w-[100vw] py-[20px] mx-2 flex">
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
        </section>
        
        </>
    )
}

export default UserDashboard