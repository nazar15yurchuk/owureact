import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
// import AuthRequireLayout from "./layouts/AuthRequireLayout";
import {CarsPage} from "./pages";
import {LoginPage} from "./pages";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AuthRequireLayout from "./layouts/AuthRequireLayout";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/cars'}/>}/>
                <Route element={<AuthRequireLayout/>}>
                    <Route path={'/cars'} element={<CarsPage/>}/>
                </Route>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
            </Route>
        </Routes>
    )
};

export {App};
