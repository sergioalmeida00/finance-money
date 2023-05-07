import { createContext, useContext } from "react";
import { api } from "../services/api";


interface AuthProviderProps {
    children: React.ReactNode;
}

interface SignInProps{
    login:string
    password:string
}

export const AuthContext = createContext({})

function AuthProvider({ children }:AuthProviderProps){

    async function signIn({login,password}:SignInProps){

        try {
            const response = await api.post('/user/authenticate', {
                login,password
            })
            const { token } = response.data
            api.defaults.headers.authorization = `Bearer ${token}`
            
        } catch (error) {
            console.log(`error : ${error}`)
        }

    }


    return(
        <AuthContext.Provider value={{ signIn }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}