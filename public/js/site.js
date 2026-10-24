// Portfolio page behaviour: Pettag gallery, "+N more" thumbnails, video modal.
(function () {
  var VISIBLE = 6;

  // Pettag has 39 screenshots named pettag1..39.jpg; build them instead of listing each one.
  var pettag = document.getElementById('pettag-images');
  if (pettag) {
    for (var i = 1; i <= 39; i++) {
      var src = 'public/img/projects/pettag' + i + '.jpg';
      var a = document.createElement('a');
      a.href = src;
      a.setAttribute('data-lightbox', 'pettag');
      a.setAttribute('data-title', 'Pettag Thailand – screen ' + i);
      var img = document.createElement('img');
      img.src = src;
      img.alt = 'Pettag Thailand screen ' + i;
      img.loading = 'lazy';
      a.appendChild(img);
      pettag.appendChild(a);
    }
  }

  // Show the first few thumbnails; the rest stay in the lightbox set behind a "+N" tile.
  document.querySelectorAll('.gallery').forEach(function (gallery) {
    var links = gallery.querySelectorAll('a');
    if (links.length <= VISIBLE) return;
    for (var i = VISIBLE; i < links.length; i++) links[i].classList.add('is-hidden');
    var more = document.createElement('span');
    more.className = 'more';
    more.textContent = '+' + (links.length - VISIBLE + 1);
    links[VISIBLE - 1].appendChild(more);
  });

  // Video modal
  var modal = document.getElementById('videoModal');
  var video = document.getElementById('modalVideo');

  function open(src) {
    video.src = src;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    video.play().catch(function () {});
  }

  function close() {
    video.pause();
    video.removeAttribute('src');
    video.load();
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-video]');
    if (trigger) return open(trigger.getAttribute('data-video'));
    if (e.target === modal || e.target.closest('.video-modal .close')) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });

  if (window.lightbox) {
    lightbox.option({ wrapAround: true, albumLabel: '%1 / %2', fadeDuration: 200, resizeDuration: 200 });
  }
})();
