import { Route, Routes } from "react-router-dom";

import { Transactions } from "../pages/Transactions";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Transactions/>}/>
        </Routes>
    )
}