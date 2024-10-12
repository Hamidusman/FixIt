import { useState } from "react";

interface FAQProps {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
  }
  
const FaqItem:  React.FC<FAQProps> = ({ title, children, isOpen, onToggle }) => {
    return (
        <div className=" w-full shadow-lg">
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

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            
            <h1 className='text-[40px] text-center font-bold my-10'><span className='text-primary'>FAQs</span></h1>

        <section className=" my-10 mx-5 mt-10 md:mx-20 lg:flex justify-between">
            <div>
                
                <FaqItem
                    title="Can I book for full Installment on my building"
                    isOpen={openIndex === 0}
                    onToggle={() => handleToggle(0)}
                    children={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate vitae aut cum blanditiis? Maxime, aperiam. Iste, officiis odio cum blanditiis quos amet consequuntur recusandae illum magnam ullam animi fugit voluptatum."}
                    >
                </FaqItem>
                <FaqItem
                    title="Can I cancel after booking?"
                    isOpen={openIndex === 1}
                    onToggle={() => handleToggle(1)}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate vitae aut cum blanditiis? Maxime, aperiam. Iste, officiis odio cum blanditiis quos amet consequuntur recusandae illum magnam ullam animi fugit voluptatum.
                </FaqItem>
                <FaqItem
                    title="How does payment work?"
                    isOpen={openIndex === 2}
                    onToggle={() => handleToggle(2)}
                >
                     quae molestiae, temporibus dolor maxime cupiditate nisi nemo ipsam necessitatibus perferendis blanditiis, vero consequatur tenetur?
                </FaqItem>
            </div>
        </section>
        </>
    );
};

export default Faq;
