import RegisterForm from "../components/registerForm/RegisterForm";
import { useState } from "react";


const StartPage = () => {

    const [isAuth, setIsAuth] = useState(false);

    return (
        <>
            <div className="char__content">
                <RegisterForm setToken={setIsAuth}/>
            </div>
        </>
    )
}

export default StartPage;