import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AuthContext } from "../hooks/auth";
import { useContext } from "react";

export function Routes(){
    const { auth } = useContext(AuthContext)
    return(
        <BrowserRouter>
            {auth ? <AppRoutes/> : <AuthRoutes/> }
        </BrowserRouter>
    )
}