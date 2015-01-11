$(function () {

  var canvas = $('#c').get(0);
  var context = canvas.getContext('2d');
  var width = canvas.width = $(window).width();
  var height = canvas.height = $(window).height();


  var centerY = height / 2;
  var centerX = width / 2;
  var radius = width;
  var xRadius = 200;
  var yRadius = 100;
  var angle = 0;
  var xAngle = 0;
  var yAngle = 0;
  var speed = .01;
  var xSpeed = 0.05;
  var ySpeed = 0.02;
  var x, y;
  var numObjects = 400;
  var slice = Math.PI * 2 / numObjects;

  function renderNodes() {
    for(var i = 0; i < numObjects; i++) {
      angle = i * slice;
      x = centerX + Math.cos(Math.random() * angle) * radius;
      y = centerY + Math.sin(Math.random() * angle) * radius;
      context.beginPath();
      context.arc(x, y, 4, 0, Math.PI * 2, false);
      context.fill();
      context.fillStyle = 'rgba(100, 100, 200, 1)';
    }
  }

  render();

  function render() {

    context.clearRect(0, 0, width, height);
    x = centerX + Math.cos(xAngle) * xRadius;
    y = centerY + Math.sin(yAngle) * yRadius;
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2, false);
    context.fillStyle = 'rgba(200, 200, 200, 1)';
    context.fill();

    xAngle += xSpeed;
    yAngle += ySpeed;

    renderNodes();

    requestAnimationFrame(render);
  }

});