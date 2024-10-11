import GetStarted from '../base-components/start'
import Reveal from '../assets/reveal'
import React from 'react'
interface ServiceProp {
    header: string,
    description: string, 
    image: string
}

const Services: React.FC<ServiceProp> = ({header, description, image}) => {
    return(
        <div className=' md:even:flex-row-reverse flex flex-wrap justify-between my-10'>
            <div className="md:w-[50%] h-full">
                <Reveal>
                    
                <h1 className="hero-text text-[35px]  lg:text-[50px] font-bold my-0">{header}</h1>
                <p className="text-[18px] my-5 ">{description}</p>
                </Reveal>
                <GetStarted />
            </div>
            
            <Reveal>
                <img src={image} className="rounded-3xl mx-50 w-full lg:w-[440px] mt-0 h-[350px] md:h-[340px] lg:h-[450px] " alt="" />
            </Reveal>

            </div>)
}

const Service = () =>{
    return(
        
        <section className="md:px-10 lg:px-20 py-5 md:py-20 px-5 w-full bg-secondary
                            flex flex-col justify-between">
                
            <Services
            header='Electrical Repairs and Installment'
            description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio cum ex quidem aut exercitationem reprehenderit laudantium quae dicta suscipit? Animi tenetur dolores nostrum tempore recusandae voluptate enim distinctio itaque sed?'
            image='src\assets\Electrician-bro (1).png'>
            </Services>
            
            <Services
            header='Plumbing'
            description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio cum ex quidem aut exercitationem reprehenderit laudantium quae dicta suscipit? Animi tenetur dolores nostrum tempore recusandae voluptate enim distinctio itaque sed?'
            image='src\assets\Pipeline maintenance-amico.png'>
            </Services>
            
            <Services
            header='Carpentry'
            description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio cum ex quidem aut exercitationem reprehenderit laudantium quae dicta suscipit? Animi tenetur dolores nostrum tempore recusandae voluptate enim distinctio itaque sed?'
            image='src\assets\Woodworker-amico.png'>
            </Services>
            

        </section>
    )
}

export default Service