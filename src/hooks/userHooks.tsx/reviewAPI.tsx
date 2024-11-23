export const fetchReview = async (id: number, token: string | null) => {
    if (!token) {
        console.error("No token found");
        throw new Error("Authentication token is missing.");
    }

    try {
        const response = await fetch(`https://fixit-api-u7ie.onrender.com/rating/${id}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            console.error("API Error:", errorDetails);
            throw new Error("Could not fetch review");
        }

        return await response.json();
    } catch (err) {
        console.error("Error fetching review:", err);
        throw err; // Pass error to the calling function
    }
};
