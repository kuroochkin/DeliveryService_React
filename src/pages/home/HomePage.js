import { useState } from "react";
import ProductList from "../../components/productList/ProductList";
import Sidebar from "../../components/sidebar/Sidebar";


const HomePage = ({cartItems, setCartItems}) => {

    console.log(typeof(setCartItems) + "homepage");
    return (  
        <div>
            <ProductList cartItems={cartItems} setCartItems={setCartItems}/>
        </div>  
    )
}

export default HomePage;