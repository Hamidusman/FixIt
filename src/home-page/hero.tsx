import GetStarted from "../base-components/start"
import Reveal from '../assets/reveal'
import electritian from '../assets/Electrician-bro (1).png'

function Hero() {
    return(
        <section className="md:px-10 lg:px-20 my-5 py- md:py-5 px-5 w-full h-[90vh] bg-secondary
                            flex flex-col lg:flex-row justify-center items-center md:items-start lg:justify-between">
            <div className="lg:w-[50%]">
                <Reveal>
                    
                <h1 className="hero-text text-[35px]  lg:text-[75px] font-bold my-0">Technical Service Made Easy</h1>
                <p className="text-[16px] md:text-[18px] mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam sed officiis ea nulla blanditiis tempora eveniet! Corrupti dolorum sit, quod officiis tempora distinctio nemo. Qui veniam corporis cum! Repellat?</p>
                </Reveal>
                <GetStarted />
            </div>

            <Reveal>
                <img src={electritian} className="w-full lg:w-[440px] mt-0 h-[350px] md:h-[340px] lg:h-[450px] " alt="" />
            </Reveal>
        </section>
    )
}
export default Hero