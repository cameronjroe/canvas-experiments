$(function () {

  var canvas = $('#c').get(0),
    context = canvas.getContext('2d'),
    width = canvas.width = $(window).width(),
    height = canvas.height = $(window).height(),
    gravity = vector.create(0, 0.1),
    particles = [],
    numParticles = 100;
    
    for(var i = 0; i < numParticles; i++) {
      particles.push(particle.create(width / 2, height / 3, Math.random() * 5 + 2, Math.random() * Math.PI * 2));
    }

  update();

  function update() {
    context.clearRect(0, 0, width, height);

    for(var i = 0; i < numParticles; i++) {
      var p = particles[i]
      
      p.accelerate(gravity);
      p.update();

      context.beginPath();
      context.arc(p.position.getX(), p.position.getY(), 4, 0, Math.PI * 2, false);
      context.fill();
    }

    requestAnimationFrame(update);
  }

});