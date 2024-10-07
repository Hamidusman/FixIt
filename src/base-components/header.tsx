import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import GetStarted from './start';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" bg-white px-4 md:px-20 h-[90px] flex justify-between items-center  shadow-lg">
            <div className="flex items-center">
                <h2 className="text-primary text-[28px] md:text-[35px] font-extrabold">
                    Fix<span>It</span>
                </h2>
                <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block mt-5 md:mt-0 absolute top-16 left-0 w-full h-full bg-dark  shadow-lg md:static md:bg-transparent md:shadow-none transition duration-700 ease-in-out`}>
                    <li className=" md:border-b-0 md:border-none text-[20px] text-secondary md:text-dark transition ease-in-out duration-300 cursor-pointer px-4 py-2">Services</li>
                    <li className=" md:border-b-0 md:border-none text-[20px] text-secondary md:text-dark transition ease-in-out duration-300 cursor-pointer px-4 py-2">Locations</li>
                    <li className=" md:border-b-0 md:border-none text-[20px] text-secondary md:text-dark transition ease-in-out duration-300 cursor-pointer px-4 py-2">Consultation</li>
                </ul>
            </div>
            <div className='flex items-center'>
                <GetStarted />
                
                <button
                    className="md:hidden ml-4 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FontAwesomeIcon icon={faBars} size='2xl'
                     className={` p-2 rounded-md bg-primary transition-transform duration-700 ${isOpen ? "rotate-90" : ""}`} />
                    </button>
            </div>
        </header>
    );
};

export default Header;

