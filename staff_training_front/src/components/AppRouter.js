import React, { useContext } from "react";
import { Route, Routes} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
    const {employer} = useContext(Context) 
    console.log(employer)
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
});
export default AppRouter;