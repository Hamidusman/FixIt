import { useState, useEffect } from "react";
import { fetchReview } from "./reviewAPI";
import { updateStatus } from "./patchStatus";
import ReviewModal from "../../components/reviewModals";
import { ActionButtons } from "../../components/profile-components/actionButtons";
import { ReviewDetail } from "../../components/profile-components/ReviewDetail";
import { ReviewDetailProp } from "../../components/props/ReviewProps";


interface LogProp{
    id: number,
    service: string;
    description: string;
    address: string,
    region: string;
    state: string;
    date: string;
    time: string;
    duration: number;
    status: string;
    price: number


    isOpen: boolean;
    onToggle: () => void;
}



export const LogItem: React.FC<LogProp> = ({
    id, service,
    description, address, region, state,
    status, date, time, duration, price,

    isOpen, onToggle }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [error, setError] = useState<string | null>(null);
    const [review, setReview] = useState<ReviewDetailProp | null>(null)
    const [logStatus, setLogStatus] = useState(status);

    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)
    const token = localStorage.getItem('authToken');
    
    // UseEffect for Review Hook
    useEffect(() => {
        if (isOpen) {
            fetchReview(id, token)
                .then(setReview)
                .catch((err) => setError(err.message));
        }
    }, [isOpen]);

    const handleStatus = async () => {
        const token = localStorage.getItem('authToken');
        try {
            const updatedBooking = await updateStatus(
                id,
                token || '',
                logStatus,
                () => console.log()
            );
            setLogStatus(updatedBooking.status);
        } catch (err) {
            setError((err as Error).message);
        }
    };


    return(
        <div className="flex flex-col">
            <div className="bg-secondary rounded-t-md px-3 py-1 
                flex justify-between items-center "
                onClick={onToggle}>

                <div className="flex items-center gap-2">
                    <h1 className="">{service} on {date} </h1>
                </div>
                <div>({logStatus})</div>
                
            </div>

            <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-60' : 'max-h-0'}`}
            >
                <div className="px-3 py-2 bg-secondary rounded-b-md flex flex-col gap-2 ">
                    <ul className="text-[16px]">
                        <li>Time: {time}</li>
                        <li>Location: {address}, {region}, {state}</li>
                        <li>Description: {description}</li>
                        <li>Duration: {duration}</li>
                        <li>Price: ${price}</li>
                        {error ?(<p></p>): (<p></p>)}
                        
                    <ReviewDetail review={review} />
                    </ul>
                    <ActionButtons
                        logStatus={logStatus}
                        onUpdateStatus={handleStatus}
                        openReviewModal={openModal}
                    />
                </div>
            {modalOpen && (
            <ReviewModal
                closeModal={closeModal}
                bookingID={id}
                setReview={setReview}
            ></ReviewModal>
            )}
            </div>

        </div>
    )
}