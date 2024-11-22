import Reveal from '../assets/reveal.js'
import NumberCount from '../assets/numberCount.js'
interface StatProp{
    number: number,
    description: string
}

export const StatItem: React.FC<StatProp> = ({ number, description }) =>{
    return(
        <Reveal
            duration="1.2">
            
        <div className='text-center'>
            <h1 className='text-[40px] md:text-[55px] text-accent font-bold'>
            <NumberCount from={0} to={number} duration={2000}>

            </NumberCount>

            </h1>
            <p className='text-sm md:text-[16px]'>{description}</p>
        </div>
        </Reveal>

    )
}

