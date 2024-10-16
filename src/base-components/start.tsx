import { Link } from "react-router-dom"

const GetStarted = () =>{
    return(
        <Link to='/booking' className="index-2 px-7 py-3 bg-primary hover:bg-dark hover:text-primary transition duration-500 text-dark font-medium rounded-2xl text-[16px] md:text-base">Start Now</Link>
    )
}

export default GetStarted