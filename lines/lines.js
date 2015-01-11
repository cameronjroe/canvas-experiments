$(function () {

  var canvas = $('#c').get(0);
  var context = canvas.getContext('2d');
  var width = canvas.width = $(window).width();
  var height = canvas.height = $(window).height();
  
  for(var i = 0; i < 100; i++) {
    context.beginPath();
    context.moveTo(Math.random() * width, Math.random() * height);
    context.lineTo(Math.random() * width, Math.random() * height);
    context.stroke();
  }

});