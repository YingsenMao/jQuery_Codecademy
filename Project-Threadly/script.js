var main = function() {
  $('form').submit(function() {
    comment = $('#comment').val();
    if(comment !== "") {
      var html = $('<li>').text(comment);
      $(html).prependTo('.comments');
     	$('#comment').val("");
    }
    return false;
  });
};

$(document).ready(main);