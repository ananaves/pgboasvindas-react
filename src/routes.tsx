import { BrowserRouter, Route, Routes } from "react-router-dom";
import PHome from "./assets/Pages/PHome/PHome";
import PLogin from "./assets/Pages/PLogin/PLogin";
import { APP_ROUTES } from "./appConfig";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={APP_ROUTES.ROUTE_HOME} element={<PHome/>}/>
            <Route path={APP_ROUTES.ROUTE_LOGIN} element={<PLogin/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;