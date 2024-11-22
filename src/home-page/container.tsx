
import { StatItem } from '../hooks/stat-hook';
import AboutCard from '../hooks/about-hook';
import { abouts, stats } from '../data/about-data.js';


const About = () => {

    return(
        <>
            <section className=" px-5 md:px-20 py-5 flex flex-col gap-5 lg:flex-row justify-between items-center">
                {abouts.map((about, index) =>(
                    <AboutCard 
                    key={index}
                    title={about.title}
                    content={about.content}
                    icon={about.icon}/>
                )
                )}
            </section>

            <h1 className='text-[35px] lg:text-[40px] text-center font-bold my-10'>Our Result For <span className='text-primary'>Hardwork And Dedication</span></h1>

            <section className='px-5 md:px-20'>
                <article className=' shadow-xl rounded-xl bg-white px-2 lg:px-20 py-5 md:py-10 gap-5 lg:gap-3 flex flex-col md:flex-row justify-around items-center'>
                    {stats.map((stat, index) =>(
                        <StatItem
                        key={index}
                        number={stat.number}
                        description={stat.description}></StatItem>
                    ))}
                </article>
                
            </section>
            
        </>
    )
}

export default About