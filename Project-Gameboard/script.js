var main = function() {
	$('.more-btn').click(function(){
    $(this).next().toggle();
  });
  
  $('.share').click(function(){
    $(this).next().toggle();
  });
  
  $('.bell .notification').click(function(){
    $(this).toggleClass('active');
  });
};

$(document).ready(main);