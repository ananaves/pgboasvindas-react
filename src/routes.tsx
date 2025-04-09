import { BrowserRouter, Route, Routes } from "react-router-dom";
import PHome from "./assets/Pages/PHome/PHome";
import PLogin from "./assets/Pages/PLogin/PLogin";
import PAlunos from "./assets/Pages/PAlunos/PAlunos";
import PLivros from "./assets/Pages/PLivros/PLivros";
import PEmprestimos from "./assets/Pages/PEmprestimos/PEmprestimos";
import { APP_ROUTES } from "./appConfig";


function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={APP_ROUTES.ROUTE_HOME} element={<PHome/>}/>
            <Route path={APP_ROUTES.ROUTE_LOGIN} element={<PLogin/>}/>
            <Route path={APP_ROUTES.ROUTE_TABALUNO} element={<PAlunos/>}/>
            <Route path={APP_ROUTES.ROUTE_TABLIVRO} element={<PLivros/>}/>
            <Route path={APP_ROUTES.ROUTE_TABEMPRESTIMO} element={<PEmprestimos/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;