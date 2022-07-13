function formatPrice(price) {
    return Number(price).toLocaleString('pt-BR',{
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL'
    })
}

module.exports = formatPrice

// function formatPrice(price) {
//     //     return `R$ ${price}`
     
//     // }
    
//     // module.exports = formatPrice