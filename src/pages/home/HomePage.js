import ProductList from "../../components/productList/ProductList";
import { Button } from "@mui/material";


const HomePage = ({cartItems, setCartItems}) => {

    return (  
        <div>
            <div className="button input">
                    <Button variant="contained" size="medium" type="submit" 
                        onClick={() => navigateOrders('Create')}>Созданные заказы
                    </Button>
                    
                    <Button variant="contained" size="medium" type="submit" 
                    onClick={() => navigateOrders('Progress')}>Заказы в пути
                    </Button>

                    <Button variant="contained" size="medium" type="submit" 
                    onClick={() => navigateOrders('Complete')}>Завершенные заказы
                    </Button>
                </div>    
                <p></p>
            <ProductList cartItems={cartItems} setCartItems={setCartItems}/>
        </div>  
    )
}

export default HomePage;