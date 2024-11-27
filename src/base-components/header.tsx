import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import GetStarted from '../base-components/start';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Headroom>
            <header className="bg-white px-4 md:px-10 lg:px-20 h-[90px] flex justify-between items-center shadow-md z-[5]">
                <div className="flex items-center">
                    <h2 className="text-primary text-[22px] md:text-[35px] font-extrabold">
                        Handy<span>Bob</span>
                    </h2>
                    <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} ${isOpen ? 'mt-5': 'mt-0'} md:block absolute md:static top-16 left-0 w-full md:w-auto h-[100vh] md:h-auto bg-white md:bg-transparent shadow-lg md:shadow-none transition-all duration-500 ease-in-out z-10`}>
                        <li className="text-[20px]
                            cursor-pointer px-4 py-2">
                            <Link to="/services">Services</Link>
                        </li>
                        <li className="text-[20px] md:text-dark
                            cursor-pointer px-4 py-2">
                            <Link to="/locations">Locations</Link>
                        </li>
                        <li className="text-[20px] md:text-dark
                            cursor-pointer px-4 py-2">
                            Consultation
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <div className='hidden md:block'>
                    <GetStarted
                        link='/register'
                        onclick={() => console.log('Redirecting to login...')}

                    >
                        Get Started!
                    </GetStarted></div>
                    <div className="flex items-center">
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
                </div>
            </header>
        </Headroom>
    );
};

export default Header;
