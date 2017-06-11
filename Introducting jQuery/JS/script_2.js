$(document).ready(function() {
    $('.btn').mouseenter(function() {
        $('.btn').fadeTo('fast', 1)
    })

    $('.btn').mouseleave(function() {
        //the same selector, '.btn' in this case, can be refered in its inner action(function) by using keyword this 
        $(this).fadeTo('fast', 0.5)
    })
})