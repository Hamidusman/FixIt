
export const updateStatus = async (id: number, token: string, status: string, onClick?: () => void) => {
    if (!token){
        console.log('No token found')
    }
    if (status === 'pending') {
            const response = await fetch(`http://127.0.0.1:8000/booking/${id}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
                body: JSON.stringify({ status: 'completed' }),
            });

            if (!response.ok) {
                throw new Error('Failed to update status');
            }

            if(onClick) onClick()

            return await response.json();
    }
};