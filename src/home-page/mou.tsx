{/*import { faTurnDown, faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";*/}
import plumber from '../assets/Pipeline maintenance-amico.png'
import Reveal from '../assets/reveal.tsx';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion.tsx"

{/*/ interface AccordionItemProps {
    title: string;
    children: ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItems: React.FC<AccordionItemProps> = ({ title, children, isOpen, onToggle }) => {
    const colorIcon = '#E68C1A'
    return (
        <motion.div
        whileHover={{y: -10}}
        transition={{duration: 0.4}}
        className="lg:w-[550px] shadow-2xl my-5 bg-secondary">
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
        </motion.div>
    );
};
 */ }
const Accordions: React.FC = () => {

{/*    
    
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
*/}
    const accordion= [
        {
            title: "Book A Fixer",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis nobis repellendus modi repudiandae at perspiciatis maiores aperiam."
            
        },
        {
            title: "Conduct Full Building Installment",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis nobis repellendus modi repudiandae at perspiciatis maiores aperiam."
            
        },
        {
            title: "Detailed Blog Posts",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique veritatis nobis repellendus modi repudiandae at perspiciatis maiores aperiam."
            
        },

    ]

    return (
        <>
            <h1 className="text-[33px] lg:text-[40px] text-center font-bold mt-20">How We <span className="text-primary">Operate</span></h1>

            
            <section className="px-5 md:mx-20 flex flex-col lg:flex-row justify-center items-center md:justify-between">

                <img 
                    src={plumber}
                    className=" mt-0 h-[350px] md:h-[340px] lg:h-[450px] " 
                    alt=""
                    /> 
                <div className='w-full md:w-[500px]'>
                    <Reveal
                    duration="1.2">
                    {accordion.map((acc, index) =>
                        
                        
                        <Accordion type="single" collapsible
                            key={index}>
                            <AccordionItem value="item-1">
                            <AccordionTrigger className="font-bold text-lg"> {acc.title}</AccordionTrigger>
                            <AccordionContent>
                                {acc.children}
                            </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        )}
                    </Reveal>
                </div>
            </section>
        </>
    );
};

export default Accordions;
