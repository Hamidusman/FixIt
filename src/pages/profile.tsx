import { faBuilding, faMap, faMapLocation, faPerson, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CreateProfile = () =>{
    const iconColor = '#E68C1A'

    return(
        <section className="px-5 flex flex-col justify-center items-center h-[100vh]">
            <form action="" className="w-[360px] md:w-[420px] min-h-60 bg-white shadow-2xl  flex flex-col rounded-xl pt-10 px-5">
                <div className="font-bold text-3xl"
                                >Your Profile
                </div>
                <p>Fill in the form to create your profile</p>
                <div className="pt-14 gap-10 text-dark flex flex-col justify-center items-center">
                    
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
                    <label className="flex gap-5 items-center">
                        <FontAwesomeIcon icon={faMap}
                        size="2xl"
                        color={iconColor}>
                        </FontAwesomeIcon>

                        <select name=""  className="w-[270px] md:w-[320px] text-xl  border-b-dark border-b-2 focus:outline-none">
                            <option value="" className="hover:bg-primary">Abuja</option>
                            <option value="">Kaduna</option>
                            <option value="">Lagos</option>
                        </select>
                    </label>

                    <label htmlFor="" className="flex gap-5 items-center">
                        <FontAwesomeIcon
                        icon={faMapLocation}
                        size="2xl"
                        color={iconColor}>
                        </FontAwesomeIcon>
                        
                        <select name="" className="w-[270px] md:w-[320px] text-xl  border-b-dark border-b-2 focus:outline-none">
                            <option value="">Jabi</option>
                            <option value="">Kawo</option>
                            <option value="">Lekki</option>
                        </select>
                    </label>

                    <label htmlFor="" className="flex gap-5 items-center">
                        <FontAwesomeIcon icon={faBuilding}
                        size="2xl"
                        color={iconColor}></FontAwesomeIcon>
                        <input type="text" name="" id="" placeholder="Home/Work Address" className="w-[270px] md:w-[320px] text-xl bg-transparent border-b-dark border-b-2 focus:outline-none" />
                    </label>
                    
                    <label htmlFor="" className="flex gap-5 items-center">
                        <FontAwesomeIcon
                        icon={faPhone}
                        size="2xl"
                        color={iconColor}>
                        </FontAwesomeIcon>

                        <input type="number" name="" id="" placeholder="Phone Number" className="w-[270px] md:w-[320px] text-xl border-b-dark border-b-2 focus:outline-none" />
                    </label>
                </div>
                <div className="flex flex-col justify-center gap-3 items-center my-10">
                        
                    <button type="submit" className="px-20 py-3 rounded-xl text-lg font-bold bg-primary 
                                                  hover:bg-dark hover:text-primary
                                                  transition duration-100 ease-in">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default CreateProfile