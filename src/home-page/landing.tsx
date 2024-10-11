import Header from "../base-components/header";
import Hero from "./hero";
import Services from "./container";
import Accordion from "./mou"
import Reviews from "./reviews";
import Faq from "./faq";

function Homepage(){
    return(
        <>
        <Header />
        <Hero />
        <Services />
        <Accordion />
        <Reviews />
        <Faq />
        </>
    )
}

export default Homepage