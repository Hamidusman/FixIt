import { faTurnDown, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, ReactNode } from 'react';
import Reveal from '../assets/reveal';
import plumber from '../assets/Pipeline maintenance-amico.png'

interface AccordionItemProps {
    title: string;
    children: ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onToggle }) => {
    const colorIcon = '#E68C1A'
    return (
        <div className="lg:w-[550px] shadow-2xl my-5 bg-secondary">
            <header
                className="flex justify-between items-center p-4 cursor-pointer
                            bg-white rounded-t-xl mt-2"
                onClick={onToggle}
            >
                <h2 className="text-[18px] md:text-[24px] font-semibold">{title}</h2>
                <span className="transform transition-transform duration-200">
                    {isOpen ? 
                    <FontAwesomeIcon
                    icon={faTurnUp}
                    color={colorIcon}
                    size="xl">
                    </FontAwesomeIcon>
                    :
                    <FontAwesomeIcon
                    icon={faTurnDown}
                    size="xl">
                    </FontAwesomeIcon> }
                </span>
            </header>
            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}
            >
                <div className="p-4 mt-[-2px] bg-white rounded-b-xl">
                    {children}
                </div>
            </div>
        </div>
    );
};

const Accordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <h1 className="text-[33px] lg:text-[40px] text-center font-bold mt-20">How We <span className="text-primary">Operate</span></h1>

            
            <section className="mx-5 md:mx-20 lg:flex justify-center items-center md:justify-between">

            <div className='flex justify-center'>
                <img 
                    src={plumber}
                    className="w-[360px] lg:w-[550px] mt-0 h-[350px] md:h-[340px] lg:h-[450px] " 
                    alt=""
                /> 
            </div>
            <div className=''> 
                    <AccordionItem
                        title="Book For A Fixer"
                        isOpen={openIndex === 0}
                        onToggle={() => handleToggle(0)}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis nobis repellendus modi repudiandae at perspiciatis maiores aperiam.
                    </AccordionItem>
                    <AccordionItem
                        title="Conduct Full Building Installment"
                        isOpen={openIndex === 1}
                        onToggle={() => handleToggle(1)}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate vitae aut cum blanditiis? Maxime, aperiam.
                    </AccordionItem>
                    <AccordionItem
                        title="Accordion Item 3"
                        isOpen={openIndex === 2}
                        onToggle={() => handleToggle(2)}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eius delectus non illum illo minus quae molestiae.
                    </AccordionItem> 
                </div>
            </section>
        </>
    );
};

export default Accordion;
