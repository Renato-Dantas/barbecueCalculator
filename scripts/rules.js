// Carne: 300g por pessoa - até 6 horas - acima 550g
// Linguiça: 100g por pessoa - até 6h - acima 160g
// Pão de alho: 1 por pessoa - até 6h - 2 por pessoa
// Cerveja: 5 latas por pessoa - até 6 horas - acima 8 Latas
// Refri: 1L por pessoa - até 6 horas - acima 1.5L
window.onload

let adults = $('#adults')
let kids = $('#kids')
let hours = $('#hours')



function beerPP(time){
    if(time<6){
        beer = 5
    }else{
        beer = 8
    }
    return (beer * adults.val())
}

function meatPP(time){
    if(time <6){
        meat = 300
    }else{
        meat = 550
    }
    return (meat * adults.val())+ (meat * kids.val() *0.5)
}

function sodaPP(time){
    if(time<6){
        soda = 1
    }else{
        soda = 1.5
    }
    return (soda * adults.val()) + (soda * kids.val() * .5)
}

function breadPP(time){
    if(time<6){
        bread = 1
    }else{
        bread = 2
    }
    return (bread* adults.val()) + (bread * kids.val() * .5)
}

function sausagePP(time){
    if(time<6){
        sausage = 100
    }else{
        sausage = 160
    }
    return (sausage * adults.val()) + (sausage * kids.val() * .5)
}

function calcTotal(){
    let beerCalc  = Math.ceil(beerPP(hours.val()))
    let meatCalc = meatPP(hours.val())/1000
    let sodaCalc = Math.ceil(sodaPP(hours.val()))
    let breadCalc = Math.ceil(breadPP(hours.val()))
    let sausageCalc = sausagePP(hours.val())/1000
    writeText(beerCalc, meatCalc, sodaCalc, breadCalc, sausageCalc)
    
}

function writeText(beer, meat, soda, bread, sausage){
    $('#beerText').text(`Total of Beers: ${beer} Cans`)
    $('#meatText').text(`Total of Meat: ${meat} kgs`)
    $('#sodaText').text(`Total of Soda: ${soda} Liters`)
    $('#breadText').text(`Total of Garlic Bread: ${bread} units`)
    $('#sausageText').text(`Total of Sausage: ${sausage} kgs`)
}

function resetAll(){
    $('#beerText').text('')
    $('#meatText').text('')
    $('#sodaText').text('')
    $('#breadText').text('')
    $('#sausageText').text('')
    adults.val('')
    kids.val('')
    hours.val('')
}