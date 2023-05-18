import { Route, Routes } from "react-router-dom";

import { Transactions } from "../pages/Transactions";
import { Extrato } from "../pages/Extrato";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Transactions/>}/>
            <Route path="/extract" element={<Extrato/>}/>
        </Routes>
    )
}