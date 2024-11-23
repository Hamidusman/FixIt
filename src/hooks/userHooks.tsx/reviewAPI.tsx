export const fetchReview = async (id: number, token: string | null) => {
        if (!token){
            console.log('No token found')
        }

        const response = await fetch(`https://fixit-api-u7ie.onrender.com/rating/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`
            },
        });
        if (!response.ok) {
            throw new Error('Could not fetch review');
        }
        return await response.json()
    };