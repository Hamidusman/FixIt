import GetStarted from '../base-components/start'
import Reveal from '../assets/reveal'
import React from 'react'
import Header from '../base-components/header'
import plumber from '../assets/Pipeline maintenance-amico.png'
import electritian from '../assets/Electrician-bro (1).png'
import Footer from '../home-page/footer'

interface ServiceProp {
    header: string,
    description: string, 
    image: string
}

const Services: React.FC<ServiceProp> = ({header, description, image}) => {
    return(
        <div className=' md:even:flex-row-reverse flex flex-col md:flex-row justify-between items-center mt-10 mb-20 md:mb-0'>
            <div className="md:w-[50%] h-full">
                <Reveal
                    duration='1.2'>
                    <h1 className="hero-text text-[35px]  lg:text-[50px] font-bold my-0">{header}</h1>
                    <p className="text-[18px] my-5 ">{description}</p>
                </Reveal>
                <GetStarted 
                    link='/booking'
                    onclick={() => console.log('Redirecting to login...')}
                >Book Now</GetStarted>
            </div>

            <img src={image} className="rounded-3xl mx-50 w-[360px] lg:w-[440px] mt-0 h-[350px] md:h-[340px] lg:h-[450px] " alt="" />
        </div>)
}

const Service = () =>{
    const services = [
        {
            header: "Electrical Repairs and Installment",
            description: "Our expert electricians are ready to handle all types of electrical repairs and installations, ensuring safety and efficiency. Whether you need wiring for a new home or maintenance for existing systems, we deliver top-notch service with precision and care.",
            image: electritian
        },
        {
            header: "Plumbing",
            description: "From minor leaks to major installations, our skilled plumbers have you covered. We provide comprehensive plumbing services, ensuring that your water systems function smoothly, efficiently, and are always up to code. No job is too big or small for us!",
            image: plumber
        }
    ]
    return(
        <>
        <Header />
        <section className="md:px-10 lg:px-20 py-5 md:py-20 px-5 w-full bg-secondary
                            flex flex-col justify-between">
                
            {services.map((service, index) => (
                <Services
                key={index}
                header={service.header}
                description={service.description}
                image={service.image}
                />
            ))}
            

        </section>
        <Footer />
        </>
    )
}

export default Service