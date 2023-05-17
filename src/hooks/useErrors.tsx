import { useState } from "react"

interface ErrorProps{
    field:string
    message?:string
}
export function useErrors(){
  const [errors,setErrors] = useState<ErrorProps[]>([])

  function setError({field,message}:ErrorProps){

    const errorAlreadyExists = errors.find((error) => error.field === field)

    if(errorAlreadyExists){
        return
    }
    const errorMessage = message || `O campo ${field} precisa ser preenchido`;

    setErrors((prevState) => [
        ...prevState,
        {
          field,
          message:errorMessage
        }
    ])

  } 

  function removeError(fieldName:string){
    setErrors((prevState) => prevState.filter(
        error => error.field !== fieldName
    ))
  }

  function getErrorMessageByFieldName(fieldName:string){
    return errors.find((error) => error.field === fieldName)?.message
  } 

  return { setError, removeError, getErrorMessageByFieldName, errors }

}