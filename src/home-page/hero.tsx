import GetStarted from "../base-components/start"
import Reveal from '../assets/reveal'

function Hero() {
    return(
        <section className="md:px-10 lg:px-20 py-5 md:py-20 px-5 w-full h-[90vh] bg-secondary
                            flex flex-col lg:flex-row justify-between">
            <div className="lg:w-[50%] h-full">
                <Reveal>
                    
                <h1 className="hero-text text-[35px]  lg:text-[75px] font-bold my-0">Technical Service Made Easy</h1>
                <p className="text-[18px] my-5 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam sed officiis ea nulla blanditiis tempora eveniet! Corrupti dolorum sit, quod officiis tempora distinctio nemo. Qui veniam corporis cum! Repellat?</p>
                </Reveal>
                <GetStarted />
            </div>

            <Reveal>
                <img src="src\assets\Electrician-bro (1).png" className="rounded-3xl w-full lg:w-[440px] mt-0 h-[350px] md:h-[340px] lg:h-[450px] " alt="" />
            </Reveal>
        </section>
    )
}
export default Hero