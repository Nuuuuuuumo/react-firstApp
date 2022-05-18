import React, { useContext } from 'react';
import { AuthContext } from '../context';
import Input from '../components/UI/input/Input';
import MyButton from '../components/UI/myButton/MyButton';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { setIsAuth } = useContext(AuthContext)
    const navigate = useNavigate()

    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
        navigate('/posts')
    }
    
    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <Input type='text' placeholder='Введите логин'></Input>
                <Input type='password' placeholder='Введите пароль'></Input>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;