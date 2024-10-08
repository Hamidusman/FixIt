
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faLocation, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faHamburger } from '@fortawesome/free-solid-svg-icons/faHamburger';

const ServiceCard = ({title, content, icon}) =>{
    return(
        <article className="shadow-lg bg-white px-5 py-5 rounded-2xl w-full lg:w-[390px]
                            flex-flex-col ">
            <h1 className="font-bold text-[22px]">{title}</h1>
            <p className="my-4">{content}</p>
            <div className=''>
                <FontAwesomeIcon icon={icon} size='xl' className=' mb[] p-5 w-[30px] h-[30px] bg-primary rounded-[100%] '/>
            </div>
        </article>
    )
}
const Services = () => {
    return(
        <>
            <section className="bg-secondary px-5 md:px-20 py-5 flex flex-col lg:flex-row justify-between gap-5">
                <ServiceCard 
                title="Home Repairs"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium numquam possimus maxime voluptatibus provident ut iste temporibus eius veritatis."
                icon={faHammer} />
            <ServiceCard
                title="Group Services"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium numquam possimus maxime voluptatibus provident ut iste temporibus eius veritatis."
                icon={faPeopleGroup}/>

            <ServiceCard
                title="Location Services"
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium numquam possimus maxime voluptatibus provident ut iste temporibus eius veritatis."
                icon={faLocation} />
            </section>

            <h1 className='text-[40px] text-center font-bold my-10'>Our Result For <span className='text-primary'>Hardwork And Dedication</span></h1>

            <section className='px-5 md:px-20'>
                <article className=' shadow-xl rounded-xl w-full bg-white px-2 lg:px-20 py-5 md:py-10 gap-3 flex flex-col sm:flex-row justify-between'>
                    <div className='text-center'>
                        <h1 className='text-[50px] text-primary font-bold '>2</h1>
                        <p className=''>Years of dedicated service</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-[50px] text-primary font-bold '>10,000</h1>
                        <p className=''>Jobs Completed</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-[50px] text-primary font-bold '>200+</h1>
                        <p className=''>Registered professionals</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-[50px] text-primary font-bold '>7</h1>
                        <p className=''>Total branches</p>
                    </div>
                </article>
                
            </section>
            
        </>
    )
}

export default Services