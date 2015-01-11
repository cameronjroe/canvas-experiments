$(function () {

  var canvas = $('#c').get(0);
  var context = canvas.getContext('2d');
  var width = canvas.width = $(window).width();
  var height = canvas.height = $(window).height();
  var centerY = height / 2;
  var centerX = width / 2;
  var angle = 0;
  var dx, dy;

  render();

  function render() {

    context.clearRect(0, 0, width, height);

    context.save();
    context.translate(centerX, centerY);
    context.rotate(angle);
    context.beginPath();
    context.moveTo(50, 0);
    context.lineTo(-50, 0);
    context.moveTo(50, 0);
    context.lineTo(20, -20);
    context.moveTo(50, 0);
    context.lineTo(20, 20);
    context.lineWidth = 2;
    context.stroke();

    context.restore();
    requestAnimationFrame(render);

  }

  $('body').on('mousemove', function (e) {
    dx = e.clientX - centerX;
    dy = e.clientY - centerY;
    angle = Math.atan2(dy, dx);
  });

});