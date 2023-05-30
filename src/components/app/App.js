import {Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import useToken from "../../hooks/useToken";
import StartPage from "../../pages/StartPage";
import RegisterForm from "../registerForm/RegisterForm";
import AuthForm from "../authForm/AuthForm";
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
        
        <h2>gdfgdfg</h2>
        
      </div>
    );
  }
  
  export default App;
  