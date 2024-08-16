import endpoints from './Endpoints.js';

const FetchData = async (category) => {

    console.log("Hello");
    try {
        
        const response = await fetch(endpoints[category], {
            method: 'GET', // Use 'POST' if you need to make POST requests
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers you need here
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

export default FetchData;
