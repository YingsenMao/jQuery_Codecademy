/*if we add our function inside .ready(), 
jQuery will run the code in our function as soon as the HTML document loads.

$(document).ready(function() {
    jQuery magic;
});

*/

$(document).ready(function() {

/* the selector needs to be placed in $( ). The selectors are identical to CSS element, only wrapped in quotes*/
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); 

/*class is used as selector */
    $('.green').mouseenter(function() {
       $(this).animate({
           height: '+=50px'
       }); 
   });
    $('.green').mouseleave(function() {
       $(this).animate({
           height: '-=50px'
       }); 
   });


});