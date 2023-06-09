import {useState} from "react";
import LoginForm from "../loginForm/LoginForm";
import RegisterForm from "../registerForm/RegisterForm";
import './authForm.scss';
import "../style/style.scss";

import { Button } from "@mui/material";



const AuthForm = ({setToken, setIsAuth, setTypeUser}) => {

    const [isLoginForm, setIsLoginForm] = useState(true);

    return (
        <>
        {/* <AppHeader/> */}
        <div className="auth_form__container">
            
               
                <div className="ButtonLogin" disabled={isLoginForm} onClick={() => setIsLoginForm(true)}>Вход</div>
                <div className="ButtonRegister" disabled={!isLoginForm} onClick={() => setIsLoginForm(false)}>Регистрация</div>

            {isLoginForm ? <LoginForm setToken={setToken} setIsAuth={setIsAuth} setTypeUser={setTypeUser}/> 
            : <RegisterForm setToken={setToken} setTypeUser={setTypeUser}/>} 
        </div>
        </>
    )
} 

export default AuthForm;