import GetStarted from "../base-components/start"
import Reveal from '../assets/reveal'
import electritian from '../assets/Electrician-bro (1).png'

function Hero() {
    return(
        <section className="md:px-10 lg:px-20 md:pt-20 px-5 w-full h-[90vh] bg-secondary
                            flex flex-col lg:flex-row justify-around items-center md:items-start lg:justify-between">
            <div className="lg:w-[50%] text-center md:text-start">
                <Reveal>
                    
                <h1 className="hero-text text-[33px]  lg:text-[65px] font-bold ">Technical Service Made Easy</h1>
                <p className="text-[16px] md:text-[18px] my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam sed officiis ea nulla blanditiis tempora eveniet! Corrupti dolorum sit, quod officiis tempora distinctio nemo. Qui veniam corporis cum! Repellat?</p>
                </Reveal>
                <GetStarted />
            </div>

            <img src={electritian} className="w-full lg:w-[440px] mt-0 h-[350px] md:h-[340px] lg:h-[450px] " alt="" />

        </section>
    )
}
export default Hero