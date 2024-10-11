import { li } from "framer-motion/client";
import Header from "../base-components/header";
import React from "react";

interface LocationProp{
    state: string,
    regions: string[]
}

const LocationCard: React.FC<LocationProp> = ({state, regions}) =>{
    return(
        <article className="w-[380px] h-[170px] bg-white px-5 py-7 flex flex-col justify-between
                            rounded-xl ">
            <h1 className="text-[22px] font-bold text-primary">{state}</h1>
    
            <ul className="flex text-[18px] gap-1">
                {regions.map((region, index) =>
                <li key={index}>{region}</li>
                )
    
                }
            </ul>
    
        </article>
    )

}

const Location = () =>{
    const locations = [
        {
            state: 'Abuja',
            regions: ['Jabi', 'Jaji']
        },
        {
            state: 'Abuja',
            regions: ['Jabi', 'Jaji']
        },
        {
            state: 'Abuja',
            regions: ['Jabi', 'Jaji']
        },
        ]
    return(
        <section className="md:px-10 lg:px-20 px-5 w-full bg-secondary 
                            ">
            <h1 className='text-[40px] lg:text-[50px] text-center font-bold mt-10 mb-5 lg:mb-16'><span className='text-dark'>Locations</span></h1>

            <div className="flex flex-wrap mb-10 gap-4 justify-center items-center">
                {locations.map((location, index) =>(
                    <LocationCard key={index} state={location.state} regions={location.regions } />
                ))}

            </div>

        </section>
    )
}

export default Location