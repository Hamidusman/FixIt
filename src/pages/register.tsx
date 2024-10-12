import { faEnvelope, faHashtag, faPerson } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Register = () =>{
    const iconColor = '#E68C1A'

    return(
        <section className="px-5 flex flex-col justify-center items-center h-[100vh]">
            <form action="" className="w-[360px] md:w-[420px] min-h-60 bg-secondary shadow-2xl  flex flex-col rounded-xl pt-10 px-10">
                <div className="font-bold text-3xl"
                                >Register
                </div>
                <p>Fill in the form to get started</p>
                <div className="pt-14 gap-14 text-dark flex flex-col justify-center items-center">
                    
                    <label htmlFor="" className="flex gap-5 items-center">
                        <FontAwesomeIcon icon={faPerson}
                        size="2xl"
                        color={iconColor}></FontAwesomeIcon>
                        <input type="text" name="" id="" placeholder="First Name" className="w-[270px] md:w-[320px] text-xl bg-transparent border-b-dark border-b-2 focus:outline-none" />
                    </label>

                    
                    <label htmlFor="" className="flex gap-5 items-center">
                        <FontAwesomeIcon
                        icon={faPerson}
                        size="2xl"
                        color={iconColor}></FontAwesomeIcon>
                        <input type="text" name="" id="" placeholder="Last Name" className="w-[270px] md:w-[320px] text-xl bg-transparent border-b-dark border-b-2 focus:outline-none" />
                    </label>
                    
                    <label htmlFor="" className="flex gap-5 items-center">
                        <FontAwesomeIcon
                        icon={faEnvelope}
                        size="xl"
                        color={iconColor}></FontAwesomeIcon>
                        <input type="email" name="" id="" placeholder="Email" className="w-[270px] md:w-[320px] text-xl bg-transparent border-b-dark border-b-2 focus:outline-none" />
                    </label>
                    
                    <label htmlFor="" className="flex gap-5 items-center">
                        <FontAwesomeIcon
                        icon={faHashtag}
                        size="xl"
                        color={iconColor}></FontAwesomeIcon>
                        <input type="password" name="" id="" placeholder="Password" className="w-[270px] md:w-[320px] text-xl bg-transparent border-b-dark border-b-2 focus:outline-none" />
                    </label>
                </div>
                <div className="flex justify-center my-10">
                        
                    <button type="submit" className="px-20 py-3 rounded-xl text-lg font-bold bg-primary 
                                                  hover:bg-dark hover:text-primary
                                                  transition duration-500 ease-in">Register</button>
                    <p>Already have an account? <Link to="/" >Login</Link></p>
                </div>
            </form>
        </section>
    )
}

export default Register