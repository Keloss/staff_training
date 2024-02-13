import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Main from './pages/Main'
import Worker from './pages/Worker'
import Sprav from './pages/Sprav'
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, WORKER_ROUTE, SPRAV_ROUTE } from './utils/consts'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: WORKER_ROUTE,
        Component: Worker
    },
    {
        path: SPRAV_ROUTE,
        Component: Sprav
    },
]