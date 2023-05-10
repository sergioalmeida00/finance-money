export function formatDate(date:string){
    const convertedDate = new Date(date)
    const datePattern = new Intl.DateTimeFormat('pt-BR');

    const dateFormatted = datePattern.format(convertedDate)

    return dateFormatted
}