import { useEffect, useState } from "react"
import { api } from "../services/api"


interface SignInProps{
    login:string
    password:string
}

export function useAuth(){
    const [auth,setAuth] = useState('')


    async function signIn({login,password}:SignInProps){

        try {
            const response = await api.post('/user/authenticate', {
                login,password
            })
            const { token } = response.data

            localStorage.setItem('@finance:token', token)
            api.defaults.headers.common['Authorization']  = `Bearer ${token}`
            token && setAuth(token)
           
        } catch (error) {
            console.log(`error : ${error}`)
        }

    }

    useEffect(() => {
        const token = localStorage.getItem('@finance:token')

        if(token){
            api.defaults.headers.common['Authorization']  = `Bearer ${token}`
            setAuth(token)
        }
    },[])

    return {signIn, auth}
}