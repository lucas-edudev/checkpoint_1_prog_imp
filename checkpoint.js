
const pratoPronto = "Prato pronto, bom apetite!!!"
let Pipoca = 10
let Macarrão = 8
let Carne = 15
let Feijão = 12
let Brigadeiro = 8

function microondas (prato, tempo) {
    if (prato!=Pipoca && prato!=Macarrão && prato!=Carne && prato!=Feijão){
        console.log ("Prato Inexistente." + " " + pratoPronto)
    }else if (tempo<prato){
        console.log ("Tempo insuficiente." + " " + pratoPronto)
    }
    else if (tempo>=prato*2 && tempo<prato*3){
        console.log ("Comida queimou." + " " + pratoPronto)
    }
    else if (tempo>=prato*3){
        console.log ("Kabummm." + " " + pratoPronto)
    }
    else {
        console.log(pratoPronto)
    }
}

microondas (Pipoca, 10)