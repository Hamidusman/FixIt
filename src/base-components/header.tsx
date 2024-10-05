

function Header(){
    return(
        <header className=" px-20 h-[70px] flex justify-between items-center text-gray
        ">
            <div className="flex items-center">
                <h2 className="text-primary text-[35px] font-extrabold ">Fix<span>It</span></h2>
                <ul className="flex gap-5 mx-5">
                    <li>Services</li>
                    <li>Locations</li>
                    <li>Consultation</li>
                </ul>
            </div>
             <a href="http://" className="px-7 py-2 bg-primary text-secondary
                                        rounded-2xl">Start Now</a>
        </header>
    )
}

export default Header