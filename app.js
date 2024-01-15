document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');
  let effectsEnabled = true;

  toggleButton.addEventListener('click', function() {
      effectsEnabled = !effectsEnabled;
  });

  document.addEventListener('mousemove', function(event) {
      if (effectsEnabled) {
          createRippleContainer();
          createRipple(event.clientX, event.clientY);
          createTrail(event.clientX, event.clientY);
      }
  });

  function createRippleContainer() {
      const rippleContainer = document.querySelector('.ripple-container');
      if (!rippleContainer) {
          const container = document.createElement('div');
          container.className = 'ripple-container';
          document.body.appendChild(container);
      }
  }

  function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  function createRipple(x, y) {
      const rippleElement = document.createElement('div');
      rippleElement.className = 'ripple';
      rippleElement.style.left = x + 'px';
      rippleElement.style.top = y + 'px';
      rippleElement.style.backgroundColor = getRandomColor(); // Set random color
      document.querySelector('.ripple-container').appendChild(rippleElement);

      // Remove the ripple element after the animation ends
      rippleElement.addEventListener('animationend', function() {
          document.querySelector('.ripple-container').removeChild(rippleElement);
      });
  }

  function createTrail(x, y) {
      const trailElement = document.createElement('div');
      trailElement.className = 'trail';
      trailElement.style.left = x + 'px';
      trailElement.style.top = y + 'px';
      document.body.appendChild(trailElement);

      // Remove the trail element after a short delay
      setTimeout(() => {
          document.body.removeChild(trailElement);
      }, 1000);
  }
});
