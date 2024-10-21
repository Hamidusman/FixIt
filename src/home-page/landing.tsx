import Header from "../base-components/header";
import Hero from "./hero";
import About from "./container";
import Accordion from "./mou"
import Reviews from "./reviews";
import Faq from "./faq";
import Footer from "./footer";

function Homepage(){
    return(
        <>
        <Header />
        <Hero />
        <About />
        <Accordion />
        <Reviews />
        <Faq />
        <Footer />
        </>
    )
}

export default Homepage