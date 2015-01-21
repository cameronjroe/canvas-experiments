$(function () {

  var canvas = document.getElementById('c'),
    context = canvas.getContext('2d'),
    width = window.innerWidth,
    height = window.innerHeight,
    p = particle.create(100, height, 10, -Math.PI / 2),
    accel = vector.create(0.1, 0.1),
    ship = particle.create(width / 2, height / 2, 0, 0),
    thrust = vector.create(0, 0),
    angle = 0;

    update();

    document.body.addEventListener('keydown', function (e) {
      switch(e.keyCode) {
        case 38:
          thrust.setY(-0.1);
          break;
        case 40:
          thrust.setY(0.1);
          break;
        case 37:
          thrust.setX(-0.1);
          break;
        case 39:
          thrust.setX(0.1);
          break;
        default:
          break;
      }
    });

    document.body.addEventListener('keyup', function (e) {
      switch(e.keyCode) {
        case 38:
          thrust.setY(0);
          break;
        case 40:
          thrust.setY(0);
          break;
        case 37:
          thrust.setX(0);
          break;
        case 39:
          thrust.setX(0);
          break;
        default:
          break;
      }
    });

    function update() {
      context.clearRect(0, 0, width, height);

      p.accelerate(accel);
      ship.accelerate(thrust);

      ship.update();
      p.update();

      context.beginPath();
      context.save();
      context.translate(ship.position.getX(), ship.position.getY());
      context.rotate(angle);

      context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
      context.arc(ship.position.getX(), ship.position.getY(), 10, 0, Math.PI * 2, false);
      context.fill();

      context.restore();
      
      if (ship.position.getX() > width) {
        ship.position.setX(0);
      }
      if (ship.position.getX < 0) {
        ship.position.setX(width);
      }

      if (ship.position.getY() > height) {
        ship.position.setY(0);
      }

      if (ship.position.getY() < 0) {
        ship.position.setY(height);
      }

      requestAnimationFrame(update);
    }

});