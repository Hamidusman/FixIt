import NumberCount from '../assets/numberCount.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faPeopleGroup, faThumbsUp } from '@fortawesome/free-solid-svg-icons'; 
import Reveal from '../assets/reveal'
import React from 'react';

interface AboutProp{
    title: string,
    content: string,
    icon: any
}
const AboutCard: React.FC<AboutProp> = ({title, content, icon}) =>{
    return(
        <article className="shadow-2xl bg-white mb-5 px-5 py-5 rounded-2xl  lg:w-[390px]
                            flex-flex-col ">
            <Reveal>
                <h1 className="font-bold text-[22px]">{title}</h1>
                <p className="my-4">{content}</p>
                <div className=''>
                    <FontAwesomeIcon icon={icon} size='xl' className=' mb[] p-5 w-[30px] h-[30px] bg-primary rounded-[100%] '/>
                </div>
            </Reveal>
        </article>
    )
}

interface StatProp{
    number: number,
    description: string
}

const StatItem: React.FC<StatProp> = ({ number, description }) =>{
    return(
        <Reveal>
            
        <div className='text-center'>
            <h1 className='text-[40px] md:text-[55px] text-accent font-bold'>
            <NumberCount from={0} to={number} duration={2000}>

            </NumberCount>

            </h1>
            <p className='text-sm md:text-[16px]'>{description}</p>
        </div>
        </Reveal>

    )
}
const About = () => {
    const stats = [
        {
            number: 2,
            description: 'Years of dedicated services' 
        },

        {
            number: 900,
            description: 'Jobs completed' },

        {
            number: 20, 
            description: 'Registered professionals' 
        },

        {
            number: 3,
            description: 'Total Branches'
        },
    ];
    const abouts = [
        {   title: 'Home Repairs',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium numquam possimus maxime voluptatibus provident ut iste temporibus eius veritatis.',
            icon: faHammer,
        },

        {   title: 'Fully Installment',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium numquam possimus maxime voluptatibus provident ut iste temporibus eius veritatis.',
            icon: faPeopleGroup,
        },

        {   title: 'Maximum Satisfaction',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium numquam possimus maxime voluptatibus provident ut iste temporibus eius veritatis.',
            icon: faThumbsUp,
        },

    ]
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