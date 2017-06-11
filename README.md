# JavaScript

# jQuery
### Introducing jQuery
The setup almost always looks like the following:
```javascript
$(document).ready(function() {
    $('thingToTouch').event(function() {
        $('thingToAffect').effect();
    });
});
```
where "things to touch" is the HTML element you'll click on, hover over, or otherwise interact with, and "thing to affect" is the HTML element that fades away, change size, or undergoes some other transformation.  
  
Sometimes these elements are one and the same--you might hover over a <\div> to change its opacity. Ohter times you might interact with a separate element; for example, you might click on a button to resize a <\div>.
    
Sometimes if you want an effect to occur right away, without an event like .click() or .hover(), you'll skip the second line in the above:
```javascript
$(document).ready(function() {
    $('thingToAffect').effect();
})
```
  

### jQuery Fucntions
The most basic concept of jQuery is to "select some elements and do something with them". 
1. select some elements  
jQuery supports most CSS selectors. Below are some examples:
* Select Elements by ID
```javascript
$("#myId");
```
* Select Elements by Class Name
```javascript
$(".myId");
```
* Select Elements by Attribute
```javascript
$("input[name = 'first_name']");
```
2. do something  
Functions aim at doing something for selected elements based on the event.  
  
Below illustrates 'select some elements and do something'.  
```javascript
$(selector).event(function() {
    Do something
});
```
* The $() turns selected element into jQuery object, so that jQuery events can apply on it.
* event() is a function, and the function(){} within the event() is the action will perform as soon as the event() is triggered.

### Dynamic HTML
Dynamically adding elements to our HTML page is a powerful tool - it lets us modify not only the formatting, but the actual structure of our websites in response to a user's actions.
#### Adding and Removing HTML Elements
.append() inserts the specified element as the last child of the target element. .prepend() inserts the specified element as the first child of the target element. If we have a div of class .info,
```javascript
$(".info").append("<p>Stuff!</p>");
$(".info").prepend("<p>Stuff!</p>");
```
.appendTo() does the same as .append(), but it just reverses the order of "what to add" and "where to add it." 
```javascript
$('<p>Stuff!</p>').appendTo('.info');
```
We can specify where in the DOM we insert an element with the .before() and .after() functions. The syntax looks like this:
```javascript
$('target').after('<tag>To add</tag>');
```
Moving a existing element instead of creating a new one
```javascript
var $paragraph = $("p"); // existing element
$("div").after($paragraph); // Move it!
// Same as:
$("div").after($("p"));
```
  
.empty() deletes an element's content and all its descendants. For instance, if you .empty() an 'ol', you'll also remove all its 'li's and their text.  

.remove(), not only deletes an element's content, but deletes the element itself.
  
#### Modifying Classes and Content
jQuery can alter classes, CSS, and even the contents of our HTML elements.  
You can add and remove the class as follow:
```javascript
$('selector').addClass('className');
$('selector').removeClass('className');
```
By using .toggleClass() you can add the class if it isn't there and remove it if it is.  
  
jQuery enables fine-tune individual CSS property values.  
style = "height:300px; width 300px;" is same as follows.
```javascript
$("div").height("100px");
$("div").width("50px");
```
jQuery also includes a general-purpose .css() function.
```javascript
$("div").css("background-color","#008800");
```
  
.html() can be used to set the content of the first element match it finds.   
.val() is used to get the value of element
```javascript
$('div').html("I love jQuery!");
$('input:checkbox:checked').val();
```

[Manipulating Elements](http://learn.jquery.com/using-jquery-core/manipulating-elements/)

### jQuery Events
jQuery events are triggered when users perform some specific actions such click the mouse, hover over page, and type keyboard.
```javascript
$(document).ready(function() {
    $('thingToTouch').event(function() {
        $('thingToAffect').effect();
    });
});
```
Below is jQuery Events examples  
```javascript
$('div').click(function(){ });
```
```javascript
$('div').hover(function(){ });
```
```javascript
$('div').dblclick(function() {  });
```
Create an effect when your mouse is on top of an object, then have that effect vanish when your mouse moved away.
```javascript
$('div').hover(
    function(){
      $(this).addClass('highlight');
   },
   function(){
      $(this).removeClass('highlight');
   }
);
```
Make the text box light up when click on it
```javascript
$(document).ready(function(){
    $('input').focus(function(){
        $(this).css('outline-color', '#FF0000');   
    })    
})
```
.keydown() event is triggered whenever a key on the keyboard is pressed. It usually used with .animate() effect.
```javascript
$(document).ready(function() {
   $('div').animate({left:'+=10px'},500);
});
```
  
### jQuery Effects
jQuery effects are 'things to happen' when events are triggered.
```javascript
$(document).ready(function() {
    $('thingToTouch').event(function() {
        $('thingToAffect').effect();
    });
});
```
Below are some examples:
```javascript
$('div').hide();  
```
```javascript
$('img' ).animate({ top: '+=100px'}, 1000 );
```
jQuery UI is a curated set of user interface interactions, effects, widgets, and themes built on the top of the jQuery JavaScript library.[Documentation](http://jqueryui.com/)  
