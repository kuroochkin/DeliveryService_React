import {Route, Routes } from "react-router-dom";
import { useState } from "react";
import useToken from "../../hooks/useToken";
import AuthForm from "../authForm/AuthForm";
import HomePage from "../../pages/home/HomePage";
import OrdersPage from "../../pages/orders/OrdersPage";
import SingleOrderPage from "../../pages/orders/SingleOrderPage";
import Sidebar from "../sidebar/Sidebar";
import './App.css';


function App() {

  const {token, setToken } = useToken();
	const [isAuth, setIsAuth] = useState(false);

    if(!token && !isAuth) {
		console.log('Токена нет')
		return (
			<>
				<AuthForm setToken={setToken} setIsAuth={setIsAuth}/>
			</>
		)	
	}

    return (
      <div className="App">
        <div className="sitebackground">
        <Sidebar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/orders" element={<OrdersPage/>}/>
            <Route path="/orders/:orderId" element={<SingleOrderPage/>} />
          </Routes> 
        </div>
      </div>
    );
  }
  
  export default App;
  