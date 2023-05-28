import {useHttp} from '../hooks/http.hook';

const useOrderService = () => {
    const {request, error, clearError} = useHttp();
    const _apiBase = 'http://localhost:7038/api/';

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        return JSON.parse(tokenString);
    }

    const getResource = async(url) => {
        return await request(url, 'GET', null, {'Authorization': 'Bearer ' + getToken()});
    }

    const registerUser = async(credentials) => {
        const url = `${_apiBase}auth/register`
        return await request(url, 'POST', JSON.stringify(credentials), {'Content-Type': 'application/json'});
    }

    const loginUser = async(credentials) => {
        const url = `${_apiBase}auth/login`
        return await request(url, 'POST', JSON.stringify(credentials), {'Content-Type': 'application/json'});
    }

}

