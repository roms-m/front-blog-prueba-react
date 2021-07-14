import API from './../../config/config';
import { Context } from '../../context/context';
import './login.css';
import { useContext, useState } from 'react';

function Login(){

    const [user, setUser] = useState();
    const {dispatch, isFetching} = useContext(Context);

    const onHandlechange = (event) => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });
    }

    const onHandleSubmit = async (event) => {
        event.preventDefault();
        dispatch({ type: "LOGIN_START"})

        try {
            
            const res = await API.post('auth/login', user);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data})
            console.log(res);
        } catch (error) {

            dispatch({ type: "LOGIN_FAILURE"})
            console.log(error);
        }
    }

    return (
        <div className="login">
            <span className="login-title">Iniciar sesión</span>

            <form className="form" onSubmit = { onHandleSubmit }>
                <div className="form-group">
                    <label>Usuario</label>
                    <input name="username" type="text" placeholder="Usuario" className="form-control" onChange = { onHandlechange }/>
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input name="password" type="text" placeholder="Contraseña" className="form-control" onChange = { onHandlechange }/>
                </div>
                <button type="submit" className="btn-submit">Login</button> 
            </form>
        </div>
    );
}

export default Login;