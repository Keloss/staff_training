import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { registration, login } from "../http/employerAPI";
import { observer } from "mobx-react-lite";
import { Context } from "..";


const Auth = observer(() => {

    const {employer} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [fullname, setFullname] = useState('')

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const click = async () => {
       try {
        let data;
        if (isLogin) {
            data = await login(fullname, email, password);
        }
        else {
            data = await registration(fullname, email, password);
        }
        employer.setEmployer(employer)
        employer.setIsAuth(true)
        navigate('/')
        } catch(e){
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="ml-4">{isLogin? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-4" placeholder="Введите ваше ФИО..." value={fullname} onChange={e => setFullname(e.target.value)}/>
                    <Form.Control className="mt-4" placeholder="Введите ваш email..." value={email} onChange={e => setEmail(e.target.value)}/>
                    <Form.Control className="mt-4" placeholder="Введите ваш пароль..." type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <Row className="d-flex justify-content-between mt-4">
                       {isLogin ?
                        <div>
                            Нет Аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                        </div>
                        :
                        <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                        </div>
                        }
                        <Button className="mt-4 align-self-end" variant={"outline-success"} onClick={click}>{isLogin ? "Войти" : "Регистрация"}</Button>
                    </Row>
                    
                </Form>
            </Card>
        </Container>
    );
});
export default Auth;