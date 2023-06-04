import { useNavigate, useParams } from 'react-router-dom';
import useOrderService from "../../services/OrderService";
import { useState, useEffect} from 'react';
import "./orderItem.scss";

const OrderItem = () => {

    const {orderId} = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const {getOrderById} = useOrderService();

    useEffect(() => {
        getOrderById(orderId)
            .then(data => setData(data))
            .then(setLoading(false));
    }, []);

    const navigate = useNavigate();
}


