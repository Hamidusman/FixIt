
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faLocation, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'; 
import Reveal from '../assets/reveal'
import React from 'react';

interface ServiceProp{
    title: string,
    content: string,
    icon: any
}
const ServiceCard: React.FC<ServiceProp> = ({title, content, icon}) =>{
    return(
        <Reveal>
        <article className="shadow-md bg-white mb-5 px-5 py-5 rounded-2xl w-full lg:w-[390px]
                            flex-flex-col ">
            <h1 className="font-bold text-[22px]">{title}</h1>
            <p className="my-4">{content}</p>
            <div className=''>
                <FontAwesomeIcon icon={icon} size='xl' className=' mb[] p-5 w-[30px] h-[30px] bg-accent rounded-[100%] '/>
            </div>
        </article>
        </Reveal>
    )
}

interface StatProp{
    number: number,
    description: string
}

const StatItem: React.FC<StatProp> = ({number, description}) =>{
    return(
        <Reveal>
            
        <div className='text-center'>
            <h1 className='text-[50px] text-accent font-bold '>{number}</h1>
            <p className=''>{description}</p>
        </div>
        </Reveal>

    )
}
const Services = () => {
    return(
        <>
            <section className="bg-secondary px-5 md:px-20 py-5 flex flex-col lg:flex-row justify-between items-center ">
                <ServiceCard 
                title="Home Repairs"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium numquam possimus maxime voluptatibus provident ut iste temporibus eius veritatis."
                icon={faHammer} />
            <ServiceCard
                title="Group Services"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium numquam possimus maxime voluptatibus provident ut iste temporibus eius veritatis."
                icon={faPeopleGroup}/>

            <ServiceCard
                title="Location Services"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium numquam possimus maxime voluptatibus provident ut iste temporibus eius veritatis."
                icon={faLocation} />
            </section>

            <h1 className='text-[40px] text-center font-bold my-10'>Our Result For <span className='text-primary'>Hardwork And Dedication</span></h1>

            <section className='px-5 md:px-20'>
                <article className=' shadow-xl rounded-xl w-full bg-white px-2 lg:px-20 py-5 md:py-10 gap-3 flex flex-col sm:flex-row justify-between'>
                    
                    <StatItem
                        number={2}
                        description={"Years of dedicated services"}>

                    </StatItem>
                    
                    <StatItem
                        number={10000}
                        description={"Jobs completed"}>

                    </StatItem>
                    
                    <StatItem
                        number={20}
                        description={"Registered professionals and more"}>

                    </StatItem>
                    
                    <StatItem
                        number={3}
                        description={"Total Branches"}>

                    </StatItem>
                </article>
                
            </section>
            
        </>
    )
}

export default Services