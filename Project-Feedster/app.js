var main = function() {
  $('.notification img').click(function(){
    $('.notification-menu').toggle();
  });
  
  $('.post button').click(function(){
    $(this).toggleClass('btn-like');
  });
};

$(document).ready(main);