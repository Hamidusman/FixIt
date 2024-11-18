import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>{
    return (
        <footer className=" py-10 bg-dark text-smoke
        flex flex-col items-center md:text-center">
            <h1 className="text-[35px] md:text-[35px] ">Developed By Hamid</h1>
            <div className=" px-5 md:px-40 my-5 text-[14px]">
                <p>FixIt is a personal project I decided to get on to sharpen my frontend skill. As a backend developer, I had to learn it sooner or later.</p>
                <p>If you would want to check the repository or reachout to me, be sure to use any of the links below.</p>
                
                <div className="mt-5 text-primary font-bold flex flex-col gap-4">
                    <p className="">Technologies:</p>
                    <ol className="flex flex-col md:flex-row md:justify-center gap-2">
                        <li>React</li>
                        <li>Django</li>
                        <li>TypeScript</li>
                        <li>Tailwind</li>
                        <li>Framer-Motion</li>
                    </ol>
                </div>
            </div>

            <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/abdulhamid-omeiza-usman/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} 
                    size="2xl"
                    className="hover:text-primary hover:-mt-4 transition duration-1000 ease-in-out"/>
                </a>
                <a href="https://github.com/Hamidusman/" className="  " target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub}
                    size="2xl"
                    className="hover:text-primary hover:-mt-4 transition duration-700 ease-in-out"/>
                </a>

            </div>

        </footer>

    )
}

export default Footer