import React, { useContext } from "react";
import { Route, Routes} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";

const AppRouter = () => {
    const {employer} = useContext(Context) 
    return (
        <Routes>
            {employer.isAuth && authRoutes.map(({path, Component}) => 
                <Route key = {path} path={path} element={<Component />}/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key = {path} path={path} element={<Component />}/>
            )}
        </Routes>
    );
}
export default AppRouter;