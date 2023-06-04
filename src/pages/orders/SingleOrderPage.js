// import {useParams, Link} from 'react-router-dom';
// import { useState, useEffect } from "react";
// import useOrderService from '../../services/OrderService';

// const SingleOrderPage = () => {
//     const {orderId} = useParams();

//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const {getOrderById} = useOrderService();

//     useEffect(() => {
//         getOrderById(orderId)
//             .then(data => setData(data))
//             .then(setLoading(false));
//     }, []);



//     let items;
//     let 
//     if(data !== null){
//         items = renderItems(data);
//     }
// }