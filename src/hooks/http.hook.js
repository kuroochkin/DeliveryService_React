import { useCallback, useState } from "react";

export const useHttp = () => {
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        try {
            console.log(url, method, body);
            const response = await fetch(url, {method, body, headers});

            if(!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            console.log(data);

            return data;

        } catch (e) {
            console.log("ошибка");
            setError(e.message);
            console.log(e);
            throw e;
        }
    }, []);

    const clearError = () => setError(null);

    return {request, error, clearError};
}