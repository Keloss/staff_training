import React, { useContext } from "react";
import { Context } from "../index"
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import {Button, Container} from 'react-bootstrap';
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
const NavBar = observer( () => {
    const {employer} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        employer.setEmployer({})
        employer.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: "white"}} to={MAIN_ROUTE}>Main</NavLink>
                {employer.isAuth ?
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={"outline-light"} onClick={() => logOut()} className="ml-4">Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});
export default NavBar;