
import Reveal from "../assets/reveal";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"


const Faq = () => {

    const faqs = [
        {
            title: "Can I book for full Installment on my building?",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate vitae aut cum blanditiis? Maxime, aperiam. Iste, officiis odio cum blanditiis quos amet consequuntur recusandae illum magnam ullam animi fugit voluptatum."
        },
        {
            title: "Can I cancel after booking?",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate vitae aut cum blanditiis? Maxime, aperiam. Iste, officiis odio cum blanditiis quos amet consequuntur recusandae illum magnam ullam animi fugit voluptatum."
        },
        {
            title: "How does payment work?",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate vitae aut cum blanditiis? Maxime, aperiam. Iste, officiis odio cum blanditiis quos amet consequuntur recusandae illum magnam ullam animi fugit voluptatum."
        }
    ]

    return (
        <>
            
        <h1 className='text-[40px] text-center font-bold my-10'><span className='text-primary'>FAQs</span></h1>

        <section className=" my-10 mx-5 mt-10 md:mx-20 lg:flex justify-between">
            <div className="w-full flex flex-col gap-y-1">
                {faqs.map((faq, index) =>(
                    
                    <Reveal
                        duration="1.2">
                            
                        <Accordion type="single" collapsible
                            key={index}>
                            <AccordionItem value="item-1">
                            <AccordionTrigger className="font-bold text-lg"> {faq.title}</AccordionTrigger>
                            <AccordionContent>
                                {faq.content}
                            </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Reveal>
                ))}
            </div>
        </section>
        </>
    );
};

export default Faq;
