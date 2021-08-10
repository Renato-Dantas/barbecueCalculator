window.onload

function transitionIcos(){
    setTimeout(()=>{
        $('#ico').attr('src', '../icons/beer.png')
    },2000)

    setTimeout(()=>{
        $('#ico').attr('src', '../icons/chicken.png')
    },4000)

    setTimeout(()=>{
        $('#ico').attr('src', '../icons/barbecue.png')
        setTimeout(()=>{
            $('#ico').css('animation-name', 'none')
        },500)
    },6000)
}

function typeWriter(){
    let text = $("#welcome").find('p').text().split('')
    let element = $("#welcome").find('p')
    element.text('')
    text.forEach((letter, index)=>{
        setTimeout(()=>{
            element.text(element.text() + letter) 
            element.css('opacity', 1)
        }, 81 * index)
    })
}

function skipMain(){
    setTimeout(()=>{
        $('#welcome').slideUp(1000)
    },8000)

}

// $('#welcome').css('display', 'none')
$('#calculator').css('display', 'none')
$('#bt').css('display', 'none')

setTimeout(()=>{
    $('#calculator').fadeIn(2000)
    setTimeout(()=>{
        $('#bt').css('display', 'block')
    },2000)
    
},9000)

$('#results').css('display', 'none')


let bt = $('#bt').click(()=>{
    $('#calculator').slideUp(1000)
    $('#results').css('display', 'flex')
    calcTotal()
    setTimeout(()=>{
        bt.text('Calculate Again?')
    }, 2000)
    // bt.click(()=>{
    //     $('#results').slideUp(1000)
    //     $('#calculator').slideDown(2000)
    // })
    


})

typeWriter()
transitionIcos()
skipMain()
