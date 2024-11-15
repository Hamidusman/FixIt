{/*import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { faBuilding, faMap, faMapLocation, faPerson, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProfileData {
    firstname: string;
    lastname: string;
    phone_number: number;
    state: string;
    region: string;
    address: string;
}

const CreateProfile = () => {
    const [profileData, setProfileData] = useState({
        firstname: '',
        lastname: '',
        phone_number: '',
        state: '',
        region: '',
        address: '',
    });
    const [error, setError] = useState<string | null>(null);

    const iconColor = '#E68C1A';
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null)
    
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                alert("No authentication token found. Please log in again.");
                return;  // Prevent the submission if no token
            }
    

            const response = await axios.post('http://127.0.0.1:8000/profile/', profileData, {

                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `token ${token}`
                }
                    });
            setProfileData({
                firstname: "",
                lastname: "",
                phone_number: "",
                state: "",
                region: "",
                address: ""
            });
            console.log('Profile created:', response.data);
            navigate('/user')
            // Handle success (e.g., show a success message or redirect)
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                console.log("Error data:", error.response.data);
                setError("Failed to submit form: " + JSON.stringify(error.response.data));
            } else {
                setError("Failed to submit form. " + (error as Error).message);
            }
        }
    };
    

    return (
        <section className="px-5 flex flex-col justify-center items-center h-[100vh]">
            <form onSubmit={handleSubmit} className="w-[360px] md:w-[420px] min-h-60 bg-white shadow-2xl flex flex-col rounded-xl pt-10 px-5">
                <div className="font-bold text-3xl">Your Profile</div>
                <p>Fill in the form to create your profile</p>
                <div className="pt-14 gap-10 text-dark flex flex-col justify-center items-center">
                    <label htmlFor="firstname" className="flex gap-5 items-center">
                        <FontAwesomeIcon icon={faPerson} size="2xl" color={iconColor} />
                        <input 
                            type="text" 
                            name="firstname" 
                            id="firstname" 
                            placeholder="First Name" 
                            value={profileData.firstname}
                            onChange={handleChange}
                            className="w-[270px] md:w-[320px] text-xl bg-transparent border-b-dark border-b-2 focus:outline-none" 
                        />
                    </label>

                    <label htmlFor="lastname" className="flex gap-5 items-center">
                        <FontAwesomeIcon icon={faPerson} size="2xl" color={iconColor} />
                        <input 
                            type="text" 
                            name="lastname" 
                            id="lastname" 
                            placeholder="Last Name" 
                            value={profileData.lastname}
                            onChange={handleChange}
                            className="w-[270px] md:w-[320px] text-xl bg-transparent border-b-dark border-b-2 focus:outline-none" 
                        />
                    </label>

                    <label htmlFor="state" className="flex gap-5 items-center">
                        <FontAwesomeIcon icon={faMap} size="2xl" color={iconColor} />
                        <select 
                            name="state" 
                            id="state" 
                            value={profileData.state} 
                            onChange={handleChange} 
                            className="w-[270px] md:w-[320px] text-xl border-b-dark border-b-2 focus:outline-none"
                        >
                            <option value="Abuja">Abuja</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Lagos">Lagos</option>
                        </select>
                    </label>

                    <label htmlFor="region" className="flex gap-5 items-center">
                        <FontAwesomeIcon icon={faMapLocation} size="2xl" color={iconColor} />
                        <select 
                            name="region" 
                            id="region" 
                            value={profileData.region} 
                            onChange={handleChange} 
                            className="w-[270px] md:w-[320px] text-xl border-b-dark border-b-2 focus:outline-none"
                        >
                            <option value="Jabi">Jabi</option>
                            <option value="Kawo">Kawo</option>
                            <option value="Lekki">Lekki</option>
                        </select>
                    </label>

                    <label htmlFor="address" className="flex gap-5 items-center">
                        <FontAwesomeIcon icon={faBuilding} size="2xl" color={iconColor} />
                        <input 
                            type="text" 
                            name="address" 
                            id="address" 
                            placeholder="Home/Work Address" 
                            value={profileData.address} 
                            onChange={handleChange} 
                            className="w-[270px] md:w-[320px] text-xl bg-transparent border-b-dark border-b-2 focus:outline-none" 
                        />
                    </label>

                    <label htmlFor="phone_number" className="flex gap-5 items-center">
                        <FontAwesomeIcon icon={faPhone} size="2xl" color={iconColor} />
                        <input 
                            type="number" 
                            name="phone_number" 
                            id="phone_number" 
                            placeholder="Phone Number" 
                            value={profileData.phone_number} 
                            onChange={handleChange} 
                            className="w-[270px] md:w-[320px] text-xl border-b-dark border-b-2 focus:outline-none" 
                        />
                    </label>
                </div>

                <div className="flex flex-col justify-center gap-3 items-center my-10">
                    <button type="submit" className="px-20 py-3 rounded-xl text-lg font-bold bg-primary hover:bg-dark hover:text-primary transition duration-100 ease-in">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CreateProfile;
 */}