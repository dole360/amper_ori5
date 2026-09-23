/* Template5 visual helper: builds a decorative destination collage by
   mirroring the live hero background image. No data, login, navigation,
   admin CRUD or application logic is changed. */
(function () {
  'use strict';

  function bootTemplate5HeroCollage() {
    var hero = document.getElementById('home');
    var overlay = document.getElementById('websiteHeroOverlay');
    if (!hero || !overlay || hero.querySelector('.template5-hero-collage')) return;

    var collage = document.createElement('div');
    collage.className = 'template5-hero-collage';
    collage.setAttribute('aria-hidden', 'true');

    for (var i = 0; i < 4; i += 1) {
      var scene = document.createElement('span');
      scene.className = 'template5-hero-scene is-empty';
      collage.appendChild(scene);
    }

    var badge = document.createElement('span');
    badge.className = 'template5-hero-badge';
    badge.textContent = 'LEARNING 360';
    collage.appendChild(badge);
    hero.appendChild(collage);

    function syncBackground() {
      var bg = window.getComputedStyle(overlay).backgroundImage || '';
      var hasImage = bg && bg !== 'none';
      collage.querySelectorAll('.template5-hero-scene').forEach(function (scene) {
        if (hasImage) {
          scene.style.backgroundImage = bg;
          scene.classList.remove('is-empty');
        } else {
          scene.style.backgroundImage = '';
          scene.classList.add('is-empty');
        }
      });
    }

    syncBackground();
    var observer = new MutationObserver(syncBackground);
    observer.observe(overlay, { attributes: true, attributeFilter: ['style', 'class'] });
    window.addEventListener('load', syncBackground, { once: true });
    setTimeout(syncBackground, 300);
    setTimeout(syncBackground, 1200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootTemplate5HeroCollage, { once: true });
  } else {
    bootTemplate5HeroCollage();
  }
})();
