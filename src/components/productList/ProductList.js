import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOrderService from "../../services/OrderService";
import { Button } from "@mui/material";
import './productList.scss';

const ProductList = ({cartItems, setCartItems}) => {

    const [data, setData] = useState(null);
    

    const {getAllProducts} = useOrderService();

    useEffect(() => {
        getAllProducts()
            .then(data => setData(data))
    }, []);

    const addCart = (item) => {
        setCartItems(cartItems => [...cartItems, item])
        return cartItems;
    }

    const renderItems = (data) => {
        const items = data.products.map((item, i) => {

            return(
                
                <li className="products__item" key={i}>
                    
                    <img src={'./img/' + item.thumbnail} alt={item.title} className="products__item-img"/>
                    <div className="products__item-name">{item.title} </div>
                    <div className="products__item-price">{item.price + "₽"}</div>
                    <Button onClick={() => addCart(item)}>В корзину</Button>
                </li>
            )
        }) 

        return (
            <ul className="products__grid">
                {items}
            </ul>
        )
    }

    let items;
    if(data !== null){
        items = renderItems(data);
    }

    console.log(cartItems);
    
    return (
        <div className="products__list">
            {items}
        </div>
    )

   
}

export default ProductList;