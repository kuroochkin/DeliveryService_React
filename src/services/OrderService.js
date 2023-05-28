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

    const saveOrder = async(data) => {
        const url = `${_apiBase}order/create`;
        return await request(url, 'POST', JSON.stringify(data), {'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getToken()})
    }

    const getOrderById = async (id) => {
        const res = await getResource(_apiBase + `order/${id}`);
        console.log(res);
        return res;
    }

    const GetAllOrdersByCustomer = async () => {
        const res = await getResource(_apiBase + `order/customerOrders`);
        return res;
    }

    const GetOrdersByCustomerByOrderStatus = async(status) => {
        const res = await getResource(_apiBase + `order/customerOrders/${status}`);
        console.log(res);
        return res;
    }

    const GetAllOrdersByCourier = async () => {
        const res = await getResource(_apiBase + `order/courierOrders`);
        return res;
    }

    //ДОРАБОТАТЬ ПОДТВЕРЖДЕНИЕ ЗАКАЗА И ОТМЕНУ ЗАКАЗА

    return {
        error, 
        clearError,
        getToken,
        getResource,
        registerUser,
        loginUser,
        saveOrder,
        getOrderById,
        GetAllOrdersByCustomer,
        GetOrdersByCustomerByOrderStatus,
        GetAllOrdersByCourier
    };
}

export default useOrderService;

