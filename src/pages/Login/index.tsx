import { useContext, useState } from "react"
import { Input } from "../../components/Input/styles"
import { ContainerLogin, Content } from "./styles"
import { AuthContext } from "../../hooks/auth"
import { useErrors } from "../../hooks/useErrors"



export function Login(){
    const {setError, removeError, getErrorMessageByFieldName,errors } = useErrors()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const { signIn } = useContext(AuthContext)

    const isFormValid = (errors.length == 0)

    console.log(errors, isFormValid)
    function handleChangeLogin(event: React.ChangeEvent<HTMLInputElement>){
        setLogin(event.target.value)    
        if(!event.target.value){
            setError({field:'login', message:'Login precisa ser preenchido.'})
        }else{
            removeError('login')
        }
    }

    function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value)
        if(!event.target.value){
            setError({field:'password',message:'Senha precisa ser informada.'})
        }else{
            removeError('password')
        }

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
                { errors && <small> { getErrorMessageByFieldName('login') } </small> }
                <Input 
                    onChange={handleChangePassword}
                    value={password}
                    placeholder="Password" 
                    type="password"
                />
                { errors && <small> { getErrorMessageByFieldName('password') } </small> }
                <button onClick={handleSubmit} disabled={!isFormValid} >Acessar</button>
            </form>

            </Content>
        </ContainerLogin>
    )
}