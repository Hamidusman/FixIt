import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
import { FormEvent, useState } from "react"
import { motion } from "framer-motion"

interface RegisterState {
    email: string,
    password: string,
    confirm: string
}

const Register = () =>{
    const iconColor = '#E68C1A';
    const navigate = useNavigate();

    /** form data */
    const [formState, setFormState] = useState<RegisterState>({
        email: "",
        password: "",
        confirm: "",
    })

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    
    /** submit function */
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    
        if (formState.password !== formState.confirm) {
            setError("Password does not match");
            return;
        }
    
        try {
            const response = await fetch("https://fixit-api-u7ie.onrender.com/auth/users/", {
                method: "POST", // Specify the method as POST
                headers: {
                    "Content-Type": "application/json", // Set the content type to JSON
                },
                body: JSON.stringify({
                    email: formState.email,
                    password: formState.password,
                    re_password: formState.confirm
                })
            });
    
            if (response.status === 201) {
                // If registration is successful, navigate to the user page
                navigate('/user');
            } else {
                const errorData = await response.json(); // Capture any error messages from the response
                setError(errorData.detail || "Failed to register");
            }
        } catch (err) {
            setError("Failed to register");
        }
    };
    

    return(
        <section className="px-5 flex flex-col justify-center items-center h-[100vh]">
            <form 
                onSubmit={handleSubmit}
                className="w-full sm:w-[420px] min-h-60 bg-white shadow-2xl  flex flex-col rounded-xl pt-10 px-7">
                <div className="font-bold text-3xl">Register</div>
                <p>Fill in the form to get started</p>
                <div className="pt-14 gap-10 text-dark flex flex-col justify-center items-center">
                    
                    <label htmlFor="" className="flex gap-5 items-center">
                        <FontAwesomeIcon
                        icon={faEnvelope}
                        size="xl"
                        color={iconColor}></FontAwesomeIcon>
                        <input 
                            type="email"
                            name="email"
                            id="" placeholder="Email"
                            value={formState.email}
                            onChange={handleChange}
                            className="sm:w-[270px] md:w-[320px] text-xl bg-transparent border-b-dark border-b-2 focus:outline-none" />
                    </label>
                    
                    <label htmlFor="" className="flex gap-5 items-center">
                        <FontAwesomeIcon
                        icon={faLock}
                        size="xl"
                        color={iconColor}></FontAwesomeIcon>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formState.password}
                            onChange={handleChange}
                            className="sm:w-[270px] md:w-[320px] text-xl bg-transparent border-b-dark border-b-2 focus:outline-none"
                            required
                            />
                    </label>
                    
                    <label htmlFor="" className="flex gap-5 items-center">
                        <FontAwesomeIcon
                        icon={faLock}
                        size="xl"
                        color={iconColor}></FontAwesomeIcon>
                        <input
                            type="password"
                            name="confirm"
                            placeholder="Confirm Password"
                            value={formState.confirm}
                            onChange={handleChange}
                            className="sm:w-[270px] md:w-[320px]  text-xl bg-transparent border-b-dark border-b-2 focus:outline-none"
                            required
                        />
                    </label>

                </div>
                <div className="flex flex-col justify-center gap-3 items-center my-10">
                        
                    <motion.button
                        whileHover={{scale: '1.06'}}
                        whileTap={{scale: '0.7'}}
                        type="submit" className="px-14 py-2
                        
                        rounded-xl text-lg font-bold bg-primary
                        hover:bg-dark hover:text-primary
                        transition duration-200 ease-in">Register</motion.button>
                        {error && <p className="text-red-500">{error}</p>}
                    <p>Already have an account? <Link to="/login"  className="text-primary mt-10">Login</Link> here.</p>
                </div>
            </form>
        </section>
    )
}

export default Register