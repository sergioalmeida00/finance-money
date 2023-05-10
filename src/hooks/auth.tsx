import { createContext } from "react";
import { useAuth } from "./useAuth";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface SignInProps{
    login:string
    password:string
}

interface AuthSignProps{
    signIn: ({login,password}:SignInProps) => void
    auth:string
}


export const AuthContext = createContext({} as AuthSignProps)

function AuthProvider({ children }:AuthProviderProps){

    const {signIn,auth} = useAuth()

    return(
        <AuthContext.Provider value={{ signIn, auth }}>
            { children }
        </AuthContext.Provider>
    )
}

export {AuthProvider}