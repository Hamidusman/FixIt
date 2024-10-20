import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>{
    return (
        <footer className="pt-10 pb-14 bg-dark text-smoke
        flex flex-col items-center text-center">
            <h1 className="text-[35px] md:text-[45px] ">Developed By Hamid</h1>
            <div className="px-[20%] my-5 text-[17px]">
                <p>FixIt is a personal project i decided to get on to sharpen my frontend skill. As a backend developer, it was to come sooner or later.</p>
                <p>If you would want to check the repository or reachout to me, be sure to use any of the links below.</p>
            </div>

            <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/abdulhamid-omeiza-usman/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} 
                    size="2xl"/>
                </a>
                <a href="https://github.com/Hamidusman/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub}
                    size="2xl"/>
                </a>

            </div>

        </footer>

    )
}

export default Footer