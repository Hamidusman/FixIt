import React from "react"

interface ActionButtonProps {
    logStatus: string;
    onUpdateStatus: () => void;
    openReviewModal: () => void;
}

export const ActionButtons: React.FC<ActionButtonProps> = ({
    logStatus,
    onUpdateStatus,
    openReviewModal,
    

}) => {
    return (
        <>
        { logStatus === 'completed' && (
            
            <button
                type="button"
                className=" bg-primary w-full py-1 duration-700 ease-in-out rounded-md"
                onClick={openReviewModal}
            >
                Give Review
            </button>
        )}
        {logStatus === 'pending' && (
            <button
                type="button"
                className="bg-accent w-full py-1 duration-700 ease-in-out rounded-md"
                onClick={onUpdateStatus}
            >
                Mark as Completed
            </button>
        )}

</>
)
}