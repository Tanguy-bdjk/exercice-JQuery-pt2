//The .mouseover event occurs when the mouse pointer is over the selected element.
//The .mouseout event occurs when the mouse pointer leaves the selected element.

$(function() {
  $('#green').mouseover(function(){
    $('#text').css('color','green');
  });
   $('#red').mouseover(function(){
    $('#text').css('color','red');
  });
  $('#blue').mouseover(function(){
    $('#text').css('color','blue');
  });
  $('#green, #red, #blue').mouseout(function(){
    $('#text').css('color','black');
  });
});
