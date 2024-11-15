const BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Utility function to handle API requests
export const apiRequest = async (endpoint: string, method = 'GET', body?: object) => {
    const token = localStorage.getItem('authToken');

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Token ${token}` }), // Only add authorization if token exists
    };

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error details:", errorData);
            throw new Error(errorData?.detail || 'Request failed');
        }

        return response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error('An unknown error occurred');
    }
};
