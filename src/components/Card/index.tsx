import { useState } from "react";
import { formatPrice } from "../../utils/formatPrice";
import { HeaderCard, CardContainer } from "./style";


interface CardProps{
    title:string
    price:number
    icon: React.ReactNode; 
    variant?:'green'
}
export function Card({title,price, icon, variant}:CardProps){
    return(
        <CardContainer variant={variant}>
            <HeaderCard>
            <span> { title } </span>
            { icon }
            </HeaderCard>
            <strong>{ formatPrice( price )  }</strong>
         </CardContainer>
    )
}