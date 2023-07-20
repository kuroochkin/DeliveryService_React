import { useState, useEffect} from "react";
import { Button } from "@mui/material";
import useOrderService from "../../services/OrderService";
import "./editProfile.scss";

const EditProfile = ({setToken}) => {

    const [data, setData] = useState();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [city, setCity] = useState();

    const [itsOk, setItsOk] = useState(false);
    const [isRequest, setIsRequest] = useState(false);

    
    const {getCustomerById, registerUser} = useOrderService();

    useEffect(() => {
        getCustomerById()
            .then(data => setData(data));
    }, []);

    console.log(data);

    
    const handleSubmit = async e => {
        e.preventDefault();

        setIsRequest(true);

        const data = await registerUser({
            firstName,
            lastName,
            email,
            password
        });

        console.log(data);

        if (data?.status === 500){
			console.log('Очистка формы')
			e.target.reset(); 
		}
        else {
            setToken(data.token);
            setItsOk(true);
        }

        setIsRequest(false);
    };

    return (
        <div className="cont">
            <form onSubmit={handleSubmit}> 
                <div className="text input">
                    <label>
                        <p>Имя</p>
                        <input type="text" value={data.firstName} onChange={e => setFirstName(e.target.value)}/>
                    </label>
                </div>
                <div className="text input">
                    <label>
                        <p>Фамилия</p>
                        <input type="text" value={data.lastName} onChange={e => setLastName(e.target.value)}/>
                    </label>
                </div>
                <div className="email input">
                    <label>
                        <p>Почта</p>
                        <input type="text" value={data.email} onChange={e => setEmail(e.target.value)}/>
                    </label>
                </div>
                <div className="password input">
                    <label>
                        <p>Пароль</p>
                        <input type="password" value={data.password} onChange={e => setPassword(e.target.value)}/>
                    </label>
                </div>
                <div className="text input">
                    <label>
                        <p>Номер телефона</p>
                        <input type="text"  value={data.phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                    </label>
                </div>
                <div className="text input">
                    <label>
                        <p>Город</p>
                        <input type="text" value={data.city} onChange={e => setCity(e.target.value)}/>
                    </label>
                </div>
                <div className="button input">
                    <Button variant="contained" size="medium" type="submit">Далее</Button>
                </div>   
            </form>
        </div>
    )
}

export default EditProfile;