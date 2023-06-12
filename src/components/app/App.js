import {Route, Routes } from "react-router-dom";
import { useState } from "react";
import useToken from "../../hooks/useToken";
import AuthForm from "../authForm/AuthForm";
import HomePage from "../../pages/home/HomePage";
import OrdersPage from "../../pages/orders/OrdersPage";
import SingleOrderPage from "../../pages/orders/SingleOrderPage";
import CartPage from "../../pages/cart/CartPage";
import Sidebar from "../sidebar/Sidebar";
import SidebarForCourier from "../sidebar/SidebarForCourier";
import AllOrdersByCreatePage from "../../pages/courier/allOrdersByCreate/AllOrdersByCreatePage";
import AllOrdersCourierByStatusProgress from "../../pages/courier/allOrdersCourierByStatusProgress/AllOrdersCourierByStatusProgressPage";
import AllOrdersCourierByStatusComplete from "../../pages/courier/allOrdersCourierByStatusProgress/AllOrdersCourierByStatusCompletePage";
import './App.css';


function App() {

  const {token, setToken } = useToken();
	const [isAuth, setIsAuth] = useState(false);
  const [cartItems, setCartItems] = useState([]);


    if(!token && !isAuth) {
		console.log('Токена нет')
		return (
			<>
				<AuthForm setToken={setToken} setIsAuth={setIsAuth} />
			</>
		)	
	}

  const user = sessionStorage.getItem('typeUser')

  if(user === 'Customer'){
    return (
      <div className="App">
        <div className="sitebackground">
          <Sidebar/>
            <Routes>
              <Route path="/home" element={<HomePage cartItems={cartItems} setCartItems={setCartItems}/>}/>
              <Route path="/login" element={<AuthForm setToken={setToken} setIsAuth={setIsAuth}/>}/>
              <Route path="/orders" element={<OrdersPage/>}/>
              <Route path="/orders/:orderId" element={<SingleOrderPage/>}/>
              <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems}/>}/> 
            </Routes> 
        </div>
      </div>
    );
  }  
  if(user === 'Courier') {
    return (
      <div className="App">
        <div className="sitebackground">
          <SidebarForCourier/>
            <Routes>
              <Route path="/courier" element={<HomePage cartItems={cartItems} setCartItems={setCartItems}/>}/>
              <Route path="/allOrdersByCreate" element={<AllOrdersByCreatePage/>}/>
              <Route path="/courierOrders/Progress" element={<AllOrdersCourierByStatusProgress/>}/>
              <Route path="/courierOrders/Complete" element={<AllOrdersCourierByStatusComplete/>}/>
            </Routes> 
        </div>
      </div>
    );
  }
}

export default App;
  