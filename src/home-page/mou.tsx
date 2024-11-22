
import plumber from '../assets/Pipeline maintenance-amico.png'
import Reveal from '../assets/reveal.tsx';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion.tsx"
import { accordionData } from '../data/mou-data.tsx';

const Accordions: React.FC = () => {

    return (
        <>
            <h1 className="text-[33px] lg:text-[40px] text-center font-bold mt-20">How We <span className="text-primary">Operate</span></h1>

            
            <section className="px-5 md:mx-20 flex flex-col lg:flex-row justify-center items-center md:justify-between">

                <img 
                    src={plumber}
                    className=" mt-0 h-[350px] md:h-[340px] lg:h-[450px] " 
                    alt=""
                    /> 
                <div className='w-full md:w-[720px]'>
                    <Reveal
                    duration="1.2">
                    {accordionData.map((acc, index) =>
                        
                        
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
