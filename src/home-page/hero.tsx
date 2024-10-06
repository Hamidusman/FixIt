import GetStarted from "../base-components/start"
function Hero() {
    return(
        <section className="lg:px-20 py-10 px-5 w-full h-[90vh] bg-secondary
                            flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-[50%]">
                <h1 className="hero-text text-[40px]  lg:text-[75px] font-bold my-0">Technical Service Made Easy</h1>
                <p className="text-[18px] my-5 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam sed officiis ea nulla blanditiis tempora eveniet! Corrupti dolorum sit, quod officiis tempora distinctio nemo. Qui veniam corporis cum! Repellat?</p>
                <GetStarted />
            </div>

            <div>
                <img src="src\assets\electrical-safety-training.jpg" className="rounded-3xl w-[100vw] lg:w-[560px] mt-0 h-[220px] lg:h-[450px] " alt="" />
            </div>
        </section>
    )
}
export default Hero