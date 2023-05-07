import { useState } from "react"
import { Input } from "../../components/Input/styles"
import { ContainerLogin, Content } from "./styles"
import { useAuth } from "../../hooks/auth"

export function Login(){
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const { signIn } = useAuth()

    function handleChangeLogin(event: React.ChangeEvent<HTMLInputElement>){
        setLogin(event.target.value)        
    }

    function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
    }

    function handleSubmit(event:React.MouseEvent){
        event.preventDefault() 
        signIn({ login,password })       
    }

    return(
        <ContainerLogin>
            <Content>
            <strong>
                Finance
                <span>Money</span>
            </strong>

            <form>
                <Input 
                    onChange={handleChangeLogin}
                    value={login}
                    placeholder="Login" 
                />
                <Input 
                    onChange={handleChangePassword}
                    value={password}
                    placeholder="Password" 
                    type="password"
                />
                <button onClick={handleSubmit}>Acessar</button>
            </form>

            </Content>
        </ContainerLogin>
    )
}