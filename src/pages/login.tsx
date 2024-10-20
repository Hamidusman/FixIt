import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Login = () =>{
    const iconColor = '#E68C1A'

    return(
        <section className="px-5 flex flex-col justify-center items-center h-[100vh]">
            <form action="" className=" bg-white w-[360px] md:w-[420px] min-h-60 shadow-2xl  flex flex-col rounded-xl pt-10 px-7">
                <div className="font-bold text-3xl"
                    >Login
                </div>
                <p>Happy to have you back</p>
                <div className="pt-14 gap-10 text-dark flex flex-col justify-center items-center">
                    
                    <label htmlFor="" className="flex gap-5 items-center">
                        <FontAwesomeIcon
                        icon={faEnvelope}
                        size="xl"
                        color={iconColor}></FontAwesomeIcon>
                        <input type="email" name="" id="" placeholder="Email" className="w-[270px] md:w-[320px] text-xl bg-transparent border-b-dark border-b-2 focus:outline-none" />
                    </label>
                    
                    <label htmlFor="" className="flex gap-5 items-center">
                        <FontAwesomeIcon
                        icon={faLock}
                        size="xl"
                        color={iconColor}></FontAwesomeIcon>
                        <input type="password" name="" id="" placeholder="Password" className="w-[270px] md:w-[320px] text-xl bg-transparent border-b-dark border-b-2 focus:outline-none" />
                    </label>
                </div>

                <div className="flex flex-col justify-center gap-3 items-center my-10">
                        
                    <button type="submit" className="px-20 py-3 rounded-xl text-lg font-bold bg-primary 
                                                  hover:bg-dark hover:text-primary
                                                  transition duration-500 ease-in">Login</button>
                    <p>Don't have an account? <Link to="/register"  className="text-primary mt-10">Register</Link> here.</p>
                </div>
            </form>
        </section>
    )
}

export default Login