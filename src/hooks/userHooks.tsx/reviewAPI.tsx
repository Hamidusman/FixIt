import { apiUrl } from "../../utils/BaseUrl";

export const fetchReview = async (id: number, token: string | null) => {
    if (!token) {
        console.error("No token found");
        throw new Error("Authentication token is missing.");
    }

    try {
        const response = await fetch(`${apiUrl}/rating/${id}/`, {
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

        // Assuming the response returns an array with one review object.
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
            return data[0]; // Return the first review object
        }
        throw new Error("No review data found");
    } catch (err) {
        console.error("Error fetching review:", err);
        throw err;
    }
};
