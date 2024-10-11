import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import GetStarted from './start';
import Headroom from 'react-headroom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Headroom>
            <header className="bg-white px-4 md:px-20 h-[90px] flex justify-between items-center shadow-lg relative">
                <div className="flex items-center">
                    <h2 className="text-primary text-[28px] md:text-[35px] font-extrabold">
                        Fix<span>It</span>
                    </h2>
                    <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto h-[100vh] md:h-auto bg-dark md:bg-transparent shadow-lg md:shadow-none transition-all duration-500 ease-in-out z-10`}>
                        <li className="text-[20px] text-secondary md:text-dark transition ease-in-out duration-300 cursor-pointer px-4 py-2">
                            Services
                        </li>
                        <li className="text-[20px] text-secondary md:text-dark transition ease-in-out duration-300 cursor-pointer px-4 py-2">
                            Locations
                        </li>
                        <li className="text-[20px] text-secondary md:text-dark transition ease-in-out duration-300 cursor-pointer px-4 py-2">
                            Consultation
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <GetStarted />
                    <button
                        className="md:hidden ml-4 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            size="2xl"
                            className={`p-2 rounded-md bg-primary transition-transform duration-700 ${isOpen ? 'rotate-90' : ''}`}
                        />
                    </button>
                </div>
            </header>
        </Headroom>
    );
};

export default Header;
