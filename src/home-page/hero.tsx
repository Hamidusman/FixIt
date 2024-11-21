import GetStarted from "../base-components/start"
import Reveal from '../assets/reveal'
import electritian from '../assets/Electrician-bro (1).png'

function Hero() {
    return(
        <section className="py-5 md:py-10 md md:px-10 xl:px-20 md:pt-10 px-5 w-full h-max
                            flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
            <div className=" lg:w-[60%] text-center lg:text-start">
                <Reveal
            duration="1.2">
                    
                <h1 className="hero-text text-[40px] lg:text-[65px] xl:text-[95px] m-0 font-bold">Technical Service Made Easy</h1>
                <p className="text-[16px] md:text-[18px] my-3 lg:my-5 flex flex-wrap">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam sed officiis ea nulla blanditiis tempora eveniet! Corrupti dolorum sit, quod officiis tempora distinctio nemo. Qui veniam corporis cum! Repellat?</p>
                </Reveal>
                <GetStarted
                    link="/register"
                >
                    Get Started
                </GetStarted>
            </div>
            <Reveal
            duration="1.8">
                <img src={electritian} className="w-[350px] lg:w-[440px] mt-0 h-[350px] md:h-[340px] lg:h-[450px] " alt="" />
            </Reveal>

        </section>
    )
}
export default Hero