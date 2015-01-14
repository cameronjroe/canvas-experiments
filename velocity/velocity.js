$(function () {

  var canvas = $('#c').get(0),
    context = canvas.getContext('2d'),
    width = canvas.width = $(window).width(),
    height = canvas.height = $(window).height(),
    particles = [],
    numParticles = 100;
    
    for(var i = 0; i < numParticles; i++) {
      particles.push(particle.create(width / 2, height / 2, Math.random() * 4 + 1, Math.random() * Math.PI * 2));
    }

  update();

  function update() {
    context.clearRect(0, 0, width, height);

    for(var i = 0; i < numParticles; i++) {
      var p = particles[i]
      p.update();

      context.beginPath();
      context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
      context.fill();
    }

    requestAnimationFrame(update);
  }

});