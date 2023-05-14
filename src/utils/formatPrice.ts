function formatPrice(price:number){
    const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

    return formattedPrice;
}

export{formatPrice}