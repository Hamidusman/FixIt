export const logoutUser = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
        console.error("No token found");
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:8000/auth/token/logout/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            },
        });

        if (response.ok) {
            console.log("Logout successful");
            localStorage.removeItem("authToken");
        } else {
            console.error("Logout failed:", response.statusText);
        }
    } catch (err) {
        console.error("Error during logout:", err);
    }
};
