import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";


const Login: React.FC = () => {
    const iconColor = '#E68C1A';
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null); // Reset error state before making the request
        try {
            const response = await axios.post("https://fixit-api-u7ie.onrender.com/auth/token/login/", {
                email,
                password,
            });

            if (response.status === 200) {
                const token = response.data.auth_token;
                if (token) {
                    // Store the token in localStorage
                    localStorage.setItem('authToken', token);
                    console.log("Token stored successfully:", token);

                    // Navigate to the user profile page after successful login
                    navigate('/user');
                } else {
                    console.error("No token found in response.");
                    setError("No authentication token received from the server.");
                }
            }
        } catch (err: any) {
            console.error("Login error:", err.response ? err.response.data : err.message);
            setError("Failed to login. Please check your email and password.");
        }
    };
    return (
        <section className="px-5 flex flex-col justify-center items-center h-[100vh]">
            <form onSubmit={handleSubmit} className="bg-white w-[360px] md:w-[420px] min-h-60 shadow-2xl flex flex-col rounded-xl pt-10 px-7">
                <div className="font-bold text-3xl">Login</div>
                <p>Happy to have you back</p>
                <div className="pt-14 gap-10 text-dark flex flex-col justify-center items-center">
                    <label className="flex gap-5 items-center">
                        <FontAwesomeIcon icon={faEnvelope} size="xl" color={iconColor} />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-[270px] md:w-[320px] text-xl bg-transparent border-b-dark border-b-2 focus:outline-none"
                            required
                        />
                    </label>
                    <label className="flex gap-5 items-center">
                        <FontAwesomeIcon icon={faLock} size="xl" color={iconColor} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-[270px] md:w-[320px] text-xl bg-transparent border-b-dark border-b-2 focus:outline-none"
                            required
                        />
                    </label>
                </div>
                <div className="flex flex-col justify-center gap-3 items-center my-10">
                    <motion.button 
                        whileHover={{scale: '1.06'}}
                        whileTap={{scale: '0.7'}}
                        type="submit" className="px-14 py-2 rounded-xl text-lg font-bold bg-primary hover:bg-dark hover:text-primary transition duration-200 ease-in">
                        Login
                    </motion.button>
                    {error && <p className="text-red-500">{error}</p>}
                    <p>Don't have an account? <Link to="/register" className="text-primary mt-10">Register</Link> here.</p>
                </div>
            </form>
        </section>
    );
};

export default Login;
