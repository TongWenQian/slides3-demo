let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')

makeFakeSlides($images)

$slides.css({transform: 'translateX(-400px)'})

bindEvents()


function makeFakeSlides(){
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length-1).clone(true)

    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}

function bindEvents(){
    let current = 0

    $buttons.eq(0).on('click',function () {
        console.log(current)
        if(current == 2){
            console.log('说明是从最后一张到第一张')
            $slides.css({transform: 'translateX(-1600px)'})
                .one('transitionend',function(){
                    $slides.hide().offset()
                    $slides.css({transform: 'transform(-400px)'}).show()
                })
        }else{
            $slides.css({transform: 'translateX(-400px)'})
        }
        current = 0
    })

    $buttons.eq(1).on('click',function () {
        console.log(current)
        $slides.css({transform: 'translateX(-800px)'})
        current = 1
    })

    $buttons.eq(2).on('click',function () {
        console.log(current)
        if(current == 0){
            console.log('说明是从第一张到最后一张')
            $slides.css({transform: 'translateX(0)'})
                .one('transitionend',function(){
                    $slides.hide().offset()
                    $slides.css({transform: 'transform(-1200px)'}).show()
                })
        }else{
            $slides.css({transform: 'translateX(-1200px)'})

        }
        current = 2

    })
}
