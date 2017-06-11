$(document).ready(function() {
    $('#button').click(function() {
        var input = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + input + '</div>');
    })

    $('.list').click(function(){
        $(this).remove();
    })
})