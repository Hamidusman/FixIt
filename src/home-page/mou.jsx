import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
    return (
        <div className=" lg:w-[550px] shadow-lg">
            <header
                className="flex justify-between items-center p-4 cursor-pointer
                            bg-white rounded-t-xl mt-2"
                onClick={onToggle}
            >
                <h2 className="text-[18px] md:text-[24px] font-semibold">{title}</h2>
                <span className="transform transition-transform duration-200">
                    {isOpen ? '−' : '+'}
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

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            
            <h1 className='text-[40px] text-center font-bold my-10'>How We <span className='text-primary'>Operate</span></h1>

        <section className="mx-5 mt-10 md:mx-20 lg:flex justify-between">
            <img src="src\assets\Pipeline maintenance-amico.png"
                 className='w-full lg:w-[50%] h-[320px] md:h-[420px] ' alt="" />

            <div>
                
                <AccordionItem
                    title="Book For A Fixer"
                    isOpen={openIndex === 0}
                    onToggle={() => handleToggle(0)}
                
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis nobis repellendus modi repudiandae at perspiciatis maiores aperiam. Laborum, recusandae omnis molestiae sequi adipisci consectetur similique eveniet corrupti dolor voluptas.
                </AccordionItem>
                <AccordionItem
                    title="Conduct Full Building Installment"
                    isOpen={openIndex === 1}
                    onToggle={() => handleToggle(1)}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate vitae aut cum blanditiis? Maxime, aperiam. Iste, officiis odio cum blanditiis quos amet consequuntur recusandae illum magnam ullam animi fugit voluptatum.
                </AccordionItem>
                <AccordionItem
                    title="Accordion Item 3"
                    isOpen={openIndex === 2}
                    onToggle={() => handleToggle(2)}
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente eius delectus non illum illo minus quae molestiae, temporibus dolor maxime cupiditate nisi nemo ipsam necessitatibus perferendis blanditiis, vero consequatur tenetur?
                </AccordionItem>
            </div>
        </section>
        </>
    );
};

export default Accordion;
