import { apiUrl } from "../../utils/BaseUrl";

export const fetchStats = async (token: string | null) => {

    if (!token){
        console.log('No token found')
    }
    const response = await fetch(`${apiUrl}/profile/user-stat/`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Token ${token}`
        },
    })
    if(!response.ok){
        throw new Error("No counts to fetch");
    }
    return await response.json()
}