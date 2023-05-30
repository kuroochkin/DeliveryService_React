import { Button } from "@mui/material";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import "./loginForm.scss";
import "../style/style.scss";

import useOrderService from "../../services/OrderService";

const LoginForm = ({setToken, setIsAuth}) => {
    const {loginUser, error, clearError} = useOrderService();
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async e => {
		e.preventDefault();
        
		const data = await loginUser({
			email: email,
		  	password: password
		});

		if (data?.status === 500){
			e.target.reset(); 
		}
		else{
			setToken(data.token);
			setIsAuth(true);
			if (data.typeUser === 'Customer')
				navigate('/');
			else {
                navigate('/courier');
            }
		}
	}

    useEffect(() => {
        clearError();
    }, [])

    return(
        <div className="box">
            <form onSubmit={handleSubmit}> 
                <div className="email input">
                    <label>
                        <p>Почта</p>
                        <input type="text" onChange={e => setEmail(e.target.value)}/>
                    </label>
                </div>
                <div className="password input">
                    <label>
                        <p>Пароль</p>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                </div>
                <div className="button input">
                    <Button variant="contained" size="medium" type="submit">Авторизация</Button>
                </div>     
                {/* {errorMessage} */}
            </form>
        </div>
    )
}

export default LoginForm;