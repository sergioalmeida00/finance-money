import { createContext, useContext, useState,useEffect } from "react";
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
    const [auth,setAuth] = useState('')
    async function signIn({login,password}:SignInProps){

        try {
            const response = await api.post('/user/authenticate', {
                login,password
            })
            const { token } = response.data

            localStorage.setItem('@finance:token', token)
            api.defaults.headers.authorization = `Bearer ${token}`
            token && setAuth(token)
           
        } catch (error) {
            console.log(`error : ${error}`)
        }

    }

    useEffect(() => {
        const token = localStorage.getItem('@finance:token')

        if(token){
            api.defaults.headers.authorization = `Bearer ${token}`
            setAuth(token)
        }
    },[])


    return(
        <AuthContext.Provider value={{ signIn, auth }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}